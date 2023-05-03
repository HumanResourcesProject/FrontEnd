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
            accessorFn: (row) => `${row.title} ${row.title}`, //accessorFn used to join multiple data into a single cell
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
                  height={30}
                  src={row.original.thumbnailUrl}
                  loading="lazy"
                  style={{ borderRadius: '50%' }}
                />
                {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorKey: 'title', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            header: 'Email',
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
        
        />
    </div>
  );
};

export default TableAdmin;
