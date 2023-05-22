import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableManagerExpenses.scss";
import RequirementsService from "../../service/RequirementsService";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const TableManagerExpenses = () => {
  const [data2, setData] = useState([]);
  
  useEffect(() => {
    const token = {
      token: sessionStorage.getItem("token"),
      role: sessionStorage.getItem("role"),
    };
    RequirementsService.findallpendingexpenses(token).then((response) => {
      setData(() => response.data);
    });
  }, []);

  const [accept, setAccept] = useState(0);
  const [reject, setReject] = useState(0);

  const acceptanswer = {
    token: sessionStorage.getItem("token"),
    requirementId: accept,
  };
  const rejectanswer = {
    token: sessionStorage.getItem("token"),
    requirementId: reject,
  };
  const handleRequest = (event) => {
    event.preventDefault();
    console.log(acceptanswer);
    if (reject === 0) {
      RequirementsService.approveexpense(acceptanswer).then((response) => {
        if (response.status === 200) {
          console.log("Request accepted.");
        } else {
          console.log("Request rejected.");
        }
      });
      handleClose();
      setAccept([]);
      window.location.reload(false);
    } else {
      RequirementsService.rejectexpense(rejectanswer).then((response) => {
        if (response.status === 200) {
          console.log("Request accepted.");
        } else {
          console.log("Request rejected.");
        }
      });
      handleClose();
      setReject([]);
      window.location.reload(false);

    }
  };

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => `${row.employeeName} ${row.employeeSurname}`,
        id: "employeeId", //id is still required when using accessorFn instead of accessorKey
        header: "Employee Id",
        size: 200,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img
              alt="invoiceUrl"
              width={40}
              height={40}
              src={row.original.invoiceUrl}
              loading="lazy"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
            <span>{renderedCellValue}</span>
          </Box>
        ),
        enableEditing: false,
      },

      {
        accessorFn: (row) => `${row.amount} ${row.currency}`,
        header: "Amount",
        size: 200,
        enableEditing: false,
      },
      {
        accessorKey: "spendingDate", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        header: "Spending Date",
        size: 200,
        enableEditing: false,
      },
      {
        accessorKey: "requestDate", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        header: "Request Date",
        size: 200,
        enableEditing: true,
      },
      {
        accessorKey: "status", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        header: "Status",
        size: 200,
        enableEditing: true,
      },
    ],

    []
  );

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="table-manager-expenses">
      <h2>Expenses Table</h2>
      <MaterialReactTable
        columns={columns}
        data={data2}
        displayColumnDefOptions={{ "mrt-row-actions": { size: 100 } }} //change width of actions column to 300px
        enableRowActions
        renderRowActions={({ row }) => (
          <div>
            <Button onClick={handleOpen}>Review</Button>
            <Modal open={open} onClose={handleClose}>
              <form onSubmit={handleRequest}>
                <Box sx={style}>
                <Typography
                    component={"span"}
                    sx={{
                      fontWeight: "bold",
                      fontSize: 14,
                      mt: 10,
                      ml: 13,
                      color: "#575757",
                    }}
                  >
                    Employee Id:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, ml: 13, color: "#575757" }}
                  >
                    {row.original.employeeId}
                  </Typography>
                  <br />
                  <Typography
                    component={"span"}
                    sx={{
                      fontWeight: "bold",
                      fontSize: 14,
                      mt: 10,
                      ml: 13,
                      color: "#575757",
                    }}
                  >
                    Employee:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, mt: 2, ml: 13, color: "#575757" }}
                  >
                    {row.original.employeeName} {row.original.employeeSurname}
                  </Typography>
                  <br />
                  <Typography
                    component={"span"}
                    sx={{
                      fontWeight: "bold",
                      fontSize: 14,
                      mt: 5,
                      ml: 13,
                      color: "#575757",
                    }}
                  >
                    Request Date:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, mt: 2, ml: 13, color: "#575757" }}
                  >
                    {row.original.requestDate}
                  </Typography>
                  <br />
                  <Typography
                    component={"span"}
                    sx={{
                      fontWeight: "bold",
                      fontSize: 14,
                      mt: 10,
                      ml: 13,
                      color: "#575757",
                    }}
                  >
                    Expenses Image:
                  </Typography>{" "}
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, mt: 2, ml: 13, color: "#575757" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        mt: 2,
                        ml: 13,
                        color: "#575757",
                      }}
                    >
                      <a
                        href={row.original.invoiceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <img
                          alt="invoiceUrl"
                          width={40}
                          height={40}
                          src={row.original.invoiceUrl}
                          loading="lazy"
                          style={{ borderRadius: "50%", objectFit: "cover" }}
                        />
                      </a>
                    </Box>
                  </Typography>
                  <br />
                  <Typography
                    component={"span"}
                    sx={{
                      fontWeight: "bold",
                      fontSize: 14,
                      mt: 10,
                      ml: 13,
                      color: "#575757",
                    }}
                  >
                    Amount:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, mt: 2, ml: 13, color: "#575757" }}
                  >
                    {row.original.amount} {row.original.currency}
                  </Typography>
                  <br />
                  <Typography
                    component={"span"}
                    sx={{
                      fontWeight: "bold",
                      fontSize: 14,
                      mt: 10,
                      ml: 13,
                      color: "#575757",
                    }}
                  >
                    Spending Date:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, mt: 2, ml: 13, color: "#575757" }}
                  >
                    {row.original.spendingDate}
                  </Typography>
                  <br />
                  <Typography
                    component={"span"}
                    sx={{
                      fontWeight: "bold",
                      fontSize: 14,
                      mt: 10,
                      ml: 13,
                      color: "#575757",
                    }}
                  >
                    Status:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, mt: 2, ml: 13, color: "#575757" }}
                  >
                    {row.original.status}
                  </Typography>
                  <br />
                  <Button
                    type="submit"
                    onClick={(e) => {
                      setReject(row.original.expenseId);
                    }}
                    sx={{
                      flexDirection: "column",
                      backgroundColor: "red",
                      color: "white",
                      ml: 13,
                      mt: 5,
                      fontSize: 12,
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#0066ff",
                      },
                    }}
                  >
                    Reject
                  </Button>
                  <Button
                    type="submit"
                    onClick={(e) => {
                      setAccept(row.original.expenseId);
                    }}
                    sx={{
                      flexDirection: "column",
                      backgroundColor: "green",
                      color: "white",
                      ml: 5,
                      mt: 5,
                      fontSize: 12,
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#0066ff",
                      },
                    }}
                  >
                    Accept
                  </Button>

                </Box>
              </form>
            </Modal>
          </div>
        )}
      />{" "}
      <div className="linktobuttons-expenses">
        <Link
          to="/listemployeeleaves"
          className="expenses-button-left expenses-button"
        >

            <p className="text-leave">Leave Requests</p>

        </Link>
        <Link
          to="/listemployeeadvancepayments"
          className="expenses-button-right expenses-button"
        >

            <p className="text-adv">Advance Payments Requests</p>

        </Link>
      </div>
    </div>
  );
};

export default TableManagerExpenses;
