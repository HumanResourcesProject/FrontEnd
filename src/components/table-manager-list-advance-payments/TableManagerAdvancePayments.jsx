import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableManagerAdvancePayments.scss";
import RequirementsService from "../../service/RequirementsService";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const TableManagerAdvancePayments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = {
      token: sessionStorage.getItem("token"),
      role: sessionStorage.getItem("role"),
    };

    RequirementsService.findallpendingadvancepayment(token)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
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
      RequirementsService.approveadvencepayment(acceptanswer).then(
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
      window.location.reload(false);
    } else {
      RequirementsService.rejectadvencepayment(rejectanswer).then(
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
      window.location.reload(false);
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => `${row.employeeName} ${row.employeeSurname}`,
        id: "employeeName",
        header: "Employee",
        size: 100,
        enableEditing: false,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "requestDate",
        header: "Request Date",
        size: 100,
        enableEditing: false,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorFn: (row) => `${row.amount} ${row.currency}`,
        header: "Amount",
        size: 100,
        enableEditing: false,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "comment",
        header: "Comment",
        size: 150,
        enableEditing: false,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 100,
        enableEditing: false,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
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
    <div className="table-manager-advance-payments">

      <h2>Advance Payment Table</h2>
      <MaterialReactTable
        columns={columns}
        data={data}
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
                    sx={{ fontSize: 13, ml: 13, color: "#575757" }}
                  >
                    {row.original.employeeName} {row.original.employeeSurname}
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
                    Request Date:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, ml: 13, color: "#575757" }}
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
                    Amount:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, ml: 13, color: "#575757" }}
                  >
                    {row.original.amount} {row.original.currency}
                  </Typography>
                  <br />
                  <Typography
                    component={"span"}
                    sx={{
                      fontWeight: "bold",
                      fontSize: 14,
                      ml: 13,
                      color: "#575757",
                      mt: 5,
                    }}
                  >
                    Advance Payment Date:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, ml: 13, color: "#575757" }}
                  >
                    {row.original.advancedPaymentDate}
                  </Typography>
                  <br />
                  <Typography
                    component={"span"}
                    sx={{
                      fontWeight: "bold",
                      fontSize: 14,
                      ml: 13,
                      color: "#575757",
                      mt: 5,
                    }}
                  >
                    Comment:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, ml: 13, color: "#575757" }}
                  >
                    {row.original.comment}
                  </Typography>
                  <br />
                  <Typography
                    component={"span"}
                    sx={{
                      fontWeight: "bold",
                      fontSize: 14,
                      ml: 13,
                      color: "#575757",
                      mt: 2,
                    }}
                  >
                    Status:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, ml: 13, color: "#575757" }}
                  >
                    {row.original.status}
                  </Typography>
                  <br />
                  <Button
                    type="submit"
                    onClick={(e) => {
                      setReject(row.original.advancePaymentId);
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
                      setAccept(row.original.advancePaymentId);
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
    </div>
  );
};

export default TableManagerAdvancePayments;
