import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableManagerExpenses.scss";
import CompanyManagerService from "../../service/CompanyManagerService";
import {
  Box
} from '@mui/material';
import { Link } from "react-router-dom"

const TableManagerExpenses = () => {
  const [data2,setData] = useState([])
  useEffect(() => {
    CompanyManagerService.findallpendingexpenses(sessionStorage.getItem("token")).then((response) => {
      setData(() => (response.data
      ));
      
    });
  }, []);


  const columns = useMemo(
    () => [
          {
            accessorFn: (row) => `${row.type} `, //accessorFn used to join multiple data into a single cell
            id: 'type', //id is still required when using accessorFn instead of accessorKey
            header: 'Type',
            size: 200,
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <img
                  alt="invoiceUrl"
                  width={40}
                  height={40}
                  src={row.original.invoiceUrl}
                  loading="lazy"
                  style={{ borderRadius: '50%', objectFit: 'cover'}}
                />
                {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
                <span>{renderedCellValue}</span>
              </Box>
            ),
            enableEditing:false 
          },
          {
            accessorKey: 'amount', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Amount',
            size: 200,
            enableEditing:false 
          },
          {
            accessorKey: 'currency', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'currency',
            size: 150,
            enableEditing:true 

          },
          {
            accessorKey: 'spendingDate', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Spending Date',
            size: 200,
            enableEditing:false 

          },
          {
            accessorKey: 'requestDate', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Request Date',
            size: 200,
            enableEditing:true 

          },
          {
            accessorKey: 'status', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Status',
            size: 200,
            enableEditing:true 

          },
        ],
      
    []
  );


  return (
    <div className="table-manager-expenses">
      <MaterialReactTable  
        columns={columns} 
        data={data2} 
        />
      <div className="linktobuttons-expenses">
      <Link to="/listemployeeleaves" className="expenses-button-left expenses-button">
        <div >
          <p>Leave Requests</p>
        </div>
      </Link>
      <Link to="/listemployeeadvancepayments"  className="expenses-button-right expenses-button">
        <div>
          <p>Advance Payments Requests</p>
        </div>
      </Link>
      </div>

    </div>
  );
};

export default TableManagerExpenses;