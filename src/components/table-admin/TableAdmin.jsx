import React, { useMemo,useState,useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableAdmin.scss";
import AdminService from "../../service/AdminService";
import {
  Box
} from '@mui/material';



const TableAdmin = () => {
  const [data2,setData] = useState([])
  useEffect(() => {
    AdminService.getAllAdmins().then((response) => {
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
          },
          {
            accessorKey: 'surname', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            header: 'Surname',
            size: 300,
          },
          {
            accessorKey: 'address', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            header: 'Address',
            size: 300,
          },
          {
            accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            header: 'Phone',
            size: 300,
          },
          {
            accessorKey: 'phone', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            header: 'Phone',
            size: 300,
          },
        ],
      
    []
  );

  return (
    <div className="table-admin">
      <MaterialReactTable  
        columns={columns} 
        data={data2}
        enableEditing={true} 
        
        />
    </div>
  );
};

export default TableAdmin;
