import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableStaffLeave.scss";
import QueueIcon from "@mui/icons-material/Queue";
import RequirementsService from "../../service/RequirementsService";
import { Link } from "react-router-dom";

const TableStaffLeave = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const token = {
      token: sessionStorage.getItem('token'),
      role: sessionStorage.getItem('role'),
    };

    RequirementsService.findallleave(token)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => `${row.type} `,
        id: "type",
        header: "Leave Type",
        size: 150,
        enableEditing: false,
      },
      {
        accessorKey: "requestDate",
        header: "Request Date",
        size: 200,
        enableEditing: false,
      },
      {
        accessorKey: "startDate",
        header: "Leave Start Date",
        size: 200,
        enableEditing: false,
      },
      {
        accessorKey: "finishDate",
        header: "Leave End Date",
        size: 200,
        enableEditing: false,
      },
      {
        accessorKey: "amountOfDay",
        header: "Number of Days of Leave",
        size: 250,
        enableEditing: false,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
        enableEditing: false,
      },
      {
        accessorKey: "approvalDate",
        header: "Approval Date",
        size: 200,
        enableEditing: false,
      },
    ],
    []
  );

  return (
    <div className="staff-leave-list-container">
      <Link to="/employeeaddleave" className="addleave">
        <div>
          <QueueIcon />
        </div>
      </Link>
      <div className="table-staff-leave">
        <MaterialReactTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default TableStaffLeave;