import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableManagerLeaves.scss";
import RequirementsService from "../../service/RequirementsService";
import { Link } from "react-router-dom";

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

  const columns = useMemo(
    () => [
      {
        accessorKey: "type",
        header: "Type",
        size: 100,
        enableEditing: false,
      },
      {
        accessorFn: (row) => `${row.employeeName} ${row.employeeSurname} `,
        id: "employeeName",
        header: "Name & Surname",
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
    <div className="table-manager-leaves">
      <h2>Leave Requests Table</h2>
      <MaterialReactTable columns={columns} data={data} />
      <div className="linktobuttons-leaves">
        <Link
          to="/listemployeeadvancepayments"
          className="leaves-button-right leaves-button"
        >
          
            <p className="text-adv">Advance Payments Requests</p>
          
        </Link>
        <Link
          to="/listemployeeexpenses"
          className="leaves-button-left leaves-button"
        >
          
            <p className="text-expense">Expenses Requests</p>
          
        </Link>
      </div>
    </div>
  );
};

export default TableManagerLeaves;
