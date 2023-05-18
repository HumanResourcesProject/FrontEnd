import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableManagerAdvancePayments.scss";
import RequirementsService from "../../service/RequirementsService";
import { Link } from "react-router-dom"

const TableManagerAdvancePayments = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const token = {
      token: sessionStorage.getItem('token'),
      role: sessionStorage.getItem('role'),
    };

    RequirementsService.findallpendingadvancepayment(sessionStorage.getItem("token"))
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
        accessorFn: (row) => `${row.requestDate} `,
        id: "requestDate",
        header: "Request Date",
        size: 150,
        enableEditing: false,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        size: 150,
        enableEditing: false,
      },
      {
        accessorKey: "currency",
        header: "Currency",
        size: 150,
        enableEditing: false,
      },
      {
        accessorKey: "advancedPaymentDate",
        header: "Advanced Payment Date",
        size: 150,
        enableEditing: false,
      },
      {
        accessorKey: "comment",
        header: "Comment",
        size: 200,
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

  return (
    
      <div className="table-manager-advance-payments">
        <MaterialReactTable columns={columns} data={data} />
        <div className="linktobuttons-advance-payments">

      <Link to="/listemployeeexpenses"  
      className="advance-payments-button-left advance-payments-button">
        <div>
          <p>Expenses Requests</p>
        </div>
      </Link>
      <Link to="/listemployeeleaves" 
      className="advance-payments-button-right advance-payments-button">
        <div >
          <p>Leave Requests</p>
        </div>
      </Link>
      </div>
      </div>
    
  );
};

export default TableManagerAdvancePayments;