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
    RequirementsService.findallpendingexpenses(
      sessionStorage.getItem("token")
    ).then((response) => {
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
      RequirementsService.approveexpense(acceptanswer).then(
        (response) => {
          if (response.status === 200) {
            console.log("Request accepted.");
          } else {
            console.log("Request rejected.");
          }
        }
      );
      handleClose();
      setAccept([]);
    } else {
      RequirementsService.rejectexpense(rejectanswer).then(
        (response) => {
          if (response.status === 200) {
            console.log("Request accepted.");
          } else {
            console.log("Request rejected.");
          }
        }
      );
      handleClose();
      setReject([]);
    }
  };
  const [image, setImage] = useState();

  const handleImage = (event)=>{
    event.preventDefault();
    //window.open(url, '_blank', 'noreferrer')
  }
  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => `${row.employeeId} `, //accessorFn used to join multiple data into a single cell
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
        accessorKey: "employeeName", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        header: "Employee Name",
        size: 200,
        enableEditing: false,
      },
      {
        accessorKey: "employeeSurname", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        header: "Employee Surname",
        size: 150,
        enableEditing: true,
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
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <form onSubmit={handleRequest}>
                <Box sx={style}>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2, ml: 13, color: "#575757" }}
                  >
                    <Typography
                      component={"span"}
                      sx={{ fontWeight: "bold", fontSize: 14 }}
                    >
                      Employee:
                    </Typography>{" "}
                    <Typography component={"span"} sx={{ fontSize: 13 }}>
                      {row.original.employeeName} {row.original.employeeSurname}
                    </Typography>
                  </Typography>
                  <Typography
                    component={"span"}
                    id="modal-modal-description"
                    sx={{ mt: 2, ml: 13, color: "#575757" }}
                  >
                    <Typography
                      component={"span"}
                      sx={{ fontWeight: "bold", fontSize: 14 }}
                    >
                      Request Date:
                    </Typography>{" "}
                    <Typography component={"span"} sx={{ fontSize: 13 }}>
                      {row.original.requestDate}
                    </Typography>
                  </Typography>
                  <Typography
                    component={"span"}
                    id="modal-modal-description"
                    sx={{ mt: 2, ml: 13, color: "#575757" }}
                  >
                    <Typography
                      component={"span"}
                      sx={{ fontWeight: "bold", fontSize: 14 }}
                    >
                      Expenses Image:
                    </Typography>{" "}
                    <Typography component={"span"} sx={{ fontSize: 13 }}>
                      <Box 
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
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
                  </Typography>
                  <Typography
                    component={"span"}
                    id="modal-modal-description"
                    sx={{ mt: 2, ml: 13, color: "#575757" }}
                  >
                    <Typography
                      component={"span"}
                      sx={{ fontWeight: "bold", fontSize: 14 }}
                    >
                      Amount:
                    </Typography>{" "}
                    <Typography component={"span"} sx={{ fontSize: 13 }}>
                      {row.original.amount} {row.original.currency}
                    </Typography>
                  </Typography>
                  <Typography
                    component={"span"}
                    id="modal-modal-description"
                    sx={{ mt: 2, ml: 13, color: "#575757" }}
                  >
                    <Typography
                      component={"span"}
                      sx={{ fontWeight: "bold", fontSize: 14 }}
                    >
                      Spending Date:
                    </Typography>{" "}
                    <Typography component={"span"} sx={{ fontSize: 13 }}>
                      {row.original.spendingDate}
                    </Typography>
                  </Typography>
                  <Typography
                    component={"span"}
                    id="modal-modal-description"
                    sx={{ mt: 2, ml: 13, color: "#575757" }}
                  >
                    <Typography
                      component={"span"}
                      sx={{ fontWeight: "bold", fontSize: 14 }}
                    >
                      Status:
                    </Typography>{" "}
                    <Typography component={"span"} sx={{ fontSize: 13 }}>
                      {row.original.status}
                    </Typography>
                  </Typography>
                  <Button
                    type="submit"
                    onClick={(e) => {
                      setAccept(row.original.advancePaymentId);
                    }}
                    sx={{
                      flexDirection: "column",
                      backgroundColor: "green",
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
                    Accept
                  </Button>
                  <Button
                    type="submit"
                    onClick={(e) => {
                      setReject(row.original.advancePaymentId);
                    }}
                    sx={{
                      flexDirection: "column",
                      backgroundColor: "red",
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
                    Reject
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
