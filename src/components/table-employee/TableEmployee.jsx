import React, { useMemo,useState,useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableEmployee.scss";
import EmployeeService from "../../service/EmployeeService";
import {
  Box
} from '@mui/material';


const TableEmployee = () => {
  const [data2,setData] = useState([])
  const [token] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role")

  });
  useEffect(() => {
    EmployeeService.getAllEmployee(token).then((response) => {
      setData(() => (response.data
      ));
      console.log(response);
      
    });
  }, []);


  
  const columns = useMemo(
    () => [
          {
            accessorFn: (row) => `${row.name} `, //accessorFn used to join multiple data into a single cell
            id: 'name', //id is still required when using accessorFn instead of accessorKey
            header: 'Name',
            muiTableHeadCellProps: {
              align: 'center',
            },
            muiTableBodyCellProps: {
              align: 'center',
            },
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

          },
          {
            accessorKey: 'address', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Address',
            size: 300,


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
    <div className="employee-table">
      <MaterialReactTable  
        columns={columns} 
        data={data2} 

        />
    </div>
  );
};

export default TableEmployee;
