import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableAdvancePayment.scss";
import QueueIcon from "@mui/icons-material/Queue";
import RequirementsService from "../../service/RequirementsService";
import { Link } from "react-router-dom";


const TableAdvancePayment = () => {
    const [data, setData] = useState([]);
  
  useEffect(() => {
    const token = {
      token: sessionStorage.getItem('token'),
      role: sessionStorage.getItem('role'),
    };

    RequirementsService.findAllAdvancePayment(token)
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
        accessorFn: (row) => `${row.advancedPaymentDate} `,
        id: "type",
        header: "Advance Payment Date",
        size: 200,
        enableEditing: false,
        muiTableHeadCellProps: {
            align: 'center',
          },
          muiTableBodyCellProps: {
            align: 'center',
          },
      },
      {
        accessorKey: "requestDate",
        header: "Request Date",
        size: 150,
        enableEditing: false,
        muiTableHeadCellProps: {
            align: 'center',
          },
          muiTableBodyCellProps: {
            align: 'center',
          },
        
      },
      {
        accessorFn: (row) => ` ${row.amount} ${row.currency} `,
        id: "Amount",
        header: "Amount",
        muiTableHeadCellProps: {
            align: 'center',
          },
          muiTableBodyCellProps: {
            align: 'center',
          },
        
      },
      
      {
        accessorKey: "comment",
        header: "Comment",
        size: 50,
        enableEditing: false,
        muiTableHeadCellProps: {
            align: 'center',
          },
          muiTableBodyCellProps: {
            align: 'center',
          },
      },
      
      {
        accessorKey: "status",
        header: "Status",
        size: 100,
        enableEditing: false,
        muiTableHeadCellProps: {
            align: 'center',
          },
          muiTableBodyCellProps: {
            align: 'center',
          },
      },
      {
        accessorKey: "approvalDate",
        header: "Approval Date",
        size: 100,
        enableEditing: false,
        muiTableHeadCellProps: {
            align: 'center',
          },
          muiTableBodyCellProps: {
            align: 'center',
          },
      },
    ],
    []
  );
  return (
    <div className="advance-payment-list-container">
      <Link to="/employeeadvancepayment" className="addadvpayment">
        <div className="icon-div">
          <QueueIcon />
        </div>
        <div>Request an advance</div>
      </Link>
      <div className="table-advance-payment">
        <MaterialReactTable columns={columns} data={data} />
      </div>
    </div>
  )
}
export default TableAdvancePayment
