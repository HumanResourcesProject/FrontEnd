import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableManagerLeaves.scss";
import EmployeeService from "../../service/EmployeeService";

const TableManagerLeaves = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const token = {
      token: sessionStorage.getItem('token'),
      role: sessionStorage.getItem('role'),
    };

    EmployeeService.findallleave(token)
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
    <div>
      <div className="table-manager-leaves">
        <MaterialReactTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default TableManagerLeaves;