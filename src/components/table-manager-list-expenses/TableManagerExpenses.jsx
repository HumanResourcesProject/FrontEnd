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
    CompanyManagerService.getAllManager(sessionStorage.getItem("token")).then((response) => {
      setData(() => (response.data
      ));
      
    });
  }, []);


  
  const columns = useMemo(
    () => [
          {
            accessorFn: (row) => `${row.name} `, //accessorFn used to join multiple data into a single cell
            id: 'name', //id is still required when using accessorFn instead of accessorKey
            header: 'Name',
            size: 250,
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
                  
                  width={40}
                  height={40}
                  src={row.original.avatar}
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
            accessorKey: 'surname', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Surname',
            size: 300,
            enableEditing:false 
          },
          {
            accessorKey: 'address', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Address',
            size: 300,
            enableEditing:true 

          },
          {
            accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'E-Mail',
            size: 300,
            enableEditing:false 

          },
          {
            accessorKey: 'phone', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Phone',
            size: 300,
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