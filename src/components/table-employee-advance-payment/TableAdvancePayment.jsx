import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableAdvancePayment.scss";
import QueueIcon from "@mui/icons-material/Queue";
import RequirementsService from "../../service/RequirementsService";
import { Link } from "react-router-dom";
import { Box } from '@mui/material';


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
        accessorFn: (row) => ` ${row.status}  `,
            id: "Status",
            header: "Status",
            muiTableHeadCellProps: {
                align: 'center',
              },
              muiTableBodyCellProps: {
                align: 'center',
              },
              Cell: ({ row }) => (
                
                <Box
                  component="span"
                  sx={(theme) => ({
                    backgroundColor:
                        row.original.status === 'Rejected'
                        ? theme.palette.error.dark
                        : row.original.status === "Pending" 
                        ? 'rgb(243, 180, 12)'
                        : theme.palette.success.dark,
                    borderRadius: '0.25rem',
                    color: '#fff',
                    maxWidth: '9ch',
                    padding: '5px',
                  })}
                >
                  {row.original.status}
                </Box>
              ),
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
