import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableManagerLeaves.scss";
import RequirementsService from "../../service/RequirementsService";
import { Link } from "react-router-dom"

const TableManagerLeaves = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const token = {
      token: sessionStorage.getItem('token'),
      role: sessionStorage.getItem('role'),
    };

    RequirementsService.findallpendingleaves(token)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => `${row.employeeId} `,
        id: "employeeId",
        header: "Employee Id",
        size: 150,
        enableEditing: false,
      },
      {
        accessorKey: 'employeeName', 
        header: 'Employee Name',
        size: 200,
        enableEditing:false 
      },
      {
        accessorKey: 'employeeSurname',
        header: 'Employee Surname',
        size: 150,
        enableEditing:true 

      },
      {
        accessorKey: "type",
        header: "Type",
        size: 200,
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
        <MaterialReactTable columns={columns} data={data} />
      <div className="linktobuttons-leaves">
      <Link to="/listemployeeadvancepayments"  className="leaves-button-right leaves-button">
        <div>
          <p>Advance Payments Requests</p>
        </div>
      </Link>
      <Link to="/listemployeeexpenses"  className="leaves-button-left leaves-button">
        <div>
          <p>Expenses Requests</p>
        </div>
      </Link>
      </div>
      </div>
  );
};

export default TableManagerLeaves;