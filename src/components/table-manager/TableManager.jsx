import React, { useMemo,useState,useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableManager.scss";
import CompanyManagerService from "../../service/CompanyManagerService";
import {
  Box
} from '@mui/material';


const TableManager = () => {
  const [token, setToken] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role"),
  });
  const [data2,setData] = useState([])
  useEffect(() => {
    CompanyManagerService.getAllManager(token).then((response) => {
      setData(() => (response.data));
    });
  }, []);


  
  const columns = useMemo(
    () => [
          {
            accessorFn: (row) => `${row.name} ${row.middleName} ${row.surname} `, //accessorFn used to join multiple data into a single cell
            id: 'name', //id is still required when using accessorFn instead of accessorKey
            header: 'Name',
            
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
            accessorKey: 'address', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Address',
            size: 150,
            enableEditing:true 

          },
          {
            accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'E-Mail',
            size: 150,
            enableEditing:false 

          },
          {
            accessorKey: 'phone', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Phone',
            size: 100,
            enableEditing:true 

          },
          {
            accessorKey: 'birthDate', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Date Of Birth',
            size: 150,
            enableEditing:true 

          },
          {
            accessorKey: 'department', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Department',
            size: 100,
            enableEditing:true 

          },
          {
            accessorKey: 'occupation', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Job Title',
            size: 100,
            enableEditing:true 

          },
        ],
      
    []
  );

  return (
    <div className="own-manager-table">
      <h2>Manager Table</h2>
      <MaterialReactTable  
        columns={columns} 
        data={data2} 

        />
    </div>
  );
};

export default TableManager;
