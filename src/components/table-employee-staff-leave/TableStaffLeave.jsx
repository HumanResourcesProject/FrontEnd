import React, { useMemo,useState,useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableStaffLeave.scss";
import {
  Box
} from '@mui/material';
import QueueIcon from '@mui/icons-material/Queue';
import { Link } from "react-router-dom"


const TableAdmin = () => {
  const [data2,setData] = useState([])
  useEffect(() => {
    EmployeeService.getAllAdmins().then((response) => {
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
            header: 'Leave Type',
            size: 300,
            enableEditing:false 

          },
          {
            accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Leave Start Date',
            size: 300,
            enableEditing:false 

          },
          {
            accessorKey: 'phone', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Leave End Date',
            size: 300,
            enableEditing:false 

          },
          {
            accessorKey: 'phone', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Number of Days of Leave',
            size: 300,
            enableEditing:false 

          },
          {
            accessorKey: 'phone', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Status',
            size: 300,
            enableEditing:false 

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
    <div>
      <div className="addleave">
        <QueueIcon/>
      </div>
    <div className="table-staff-leave">
      <MaterialReactTable  
        columns={columns} 
        data={data2} 
        editingMode="modal"
        enableEditing={true} 
        onEditingRowSave={handleSaveRow}
        />
    </div>
    </div>

  );
};

export default TableAdmin;
