import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableManagerLeaves.scss";
import RequirementsService from "../../service/RequirementsService";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const TableManagerLeaves = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = {
      token: sessionStorage.getItem("token"),
      role: sessionStorage.getItem("role"),
    };

    RequirementsService.findallpendingleaves(token)
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
      RequirementsService.approveleave(acceptanswer).then((response) => {
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
      RequirementsService.rejectleave(rejectanswer).then((response) => {
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
        header: "Employee",
        size: 150,
        enableEditing: false,
      },
      {
        accessorKey: "requestDate",
        header: "Request Date",
        size: 150,
        enableEditing: false,
      },

      {
        accessorKey: "type",
        header: "Leave Type",
        size: 150,
        enableEditing: false,
      },

      {
        accessorKey: "startDate",
        header: "Leave Start Date",
        size: 150,
        enableEditing: false,
      },
      {
        accessorKey: "finishDate",
        header: "Leave End Date",
        size: 150,
        enableEditing: false,
      },
      {
        accessorKey: "amountOfDay",
        header: "Number of Days of Leave",
        size: 150,
        enableEditing: false,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
        enableEditing: false,
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
    <div className="table-manager-leaves">
      <div className="linktobutton-manage-request">
        <Link to="/managerequests" className="manage-request-button">
          <KeyboardReturnIcon className="manage-request-back" />
          <p className="text-manage-request">Manage Requests</p>
        </Link>
      </div>
      <h2>Leave Table</h2>
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
                    Leave Type:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, ml: 13, color: "#575757" }}
                  >
                    {row.original.type}
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
                    Leave Start Date:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, ml: 13, color: "#575757" }}
                  >
                    {row.original.startDate}
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
                    Leave End Date:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, ml: 13, color: "#575757" }}
                  >
                    {row.original.finishDate}
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
                    Number of Days of Leave:
                  </Typography>{" "}
                  <br />
                  <Typography
                    component={"span"}
                    sx={{ fontSize: 13, ml: 13, color: "#575757" }}
                  >
                    {row.original.amountOfDay}
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
                      setReject(row.original.leaveId);
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
                      setAccept(row.original.leaveId);
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

export default TableManagerLeaves;
