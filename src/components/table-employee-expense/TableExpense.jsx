import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableExpense.scss";
import QueueIcon from "@mui/icons-material/Queue";
import RequirementsService from "../../service/RequirementsService";
import { Link } from "react-router-dom";
import { Box } from '@mui/material';
  

const TableExpense = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const token = {
        token: sessionStorage.getItem('token'),
        role: sessionStorage.getItem('role'),
      };
  
      RequirementsService.findAllExpense(token)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
          console.log(response.data[0].invoiceUrl);
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
          accessorFn: (row) => `${row.spendingDate} `,
          id: "spendingDate",
          header: "Expense Date",
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
            accessorFn: (row) => ` `, //accessorFn used to join multiple data into a single cell
            id: 'invoice', //id is still required when using accessorFn instead of accessorKey
            header: 'Invoice',
            size: 100,
           
              
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <img
                  alt="avatar"
                  
                  width={60}
                  height={60}
                  src={row.original.invoiceUrl}
                  loading="lazy"
                  style={{ objectFit: 'cover'}}
                />
                <span>{renderedCellValue}</span>
              </Box>
            ),
            enableEditing:false
            
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
            accessorFn: (row) => ` ${row.type}  `,
            id: "Type",
            header: "Type",
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
          size: 200,
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
    <div className="expense-list-container">
    <div className="addexpense">
      <div>Expense History</div>
    </div>
    <div className="table-expense">
      <MaterialReactTable
       columns={columns}
        data={data}
        muiTableBodyCellProps={{
            sx: {
              fontSize:"xl"
            },
          }}
        />
    </div>
  </div>
  )
}
export default TableExpense
