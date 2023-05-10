import React, { useMemo,useState,useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableAdmin.scss";
import AdminService from "../../service/AdminService";
import {
  Box
} from '@mui/material';
import { Link } from "react-router-dom"


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

  const [tableData, setTableData] = useState(() => data2);

  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
    tableData[row._valuesCache] = values;
    const rowData = {
      "email" : row._valuesCache.email,
      "phone" : row._valuesCache.phone,
      "address" : row._valuesCache.address
  }
    //send/receive api updates here
    AdminService.updateMethod(rowData);
    //setTableData([...tableData]);
    exitEditingMode(); 
    window.location.reload();
  };

  return (
    <div className="table-admin">
      <MaterialReactTable  
        columns={columns} 
        data={data2} 
        editingMode="modal"
        enableEditing={true} 
        onEditingRowSave={handleSaveRow}
        />
    </div>
  );
};

export default TableAdmin;
