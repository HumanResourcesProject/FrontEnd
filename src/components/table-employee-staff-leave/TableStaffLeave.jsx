import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import "./tableStaffLeave.scss";
import QueueIcon from "@mui/icons-material/Queue";
import RequirementsService from "../../service/RequirementsService";
import { Link } from "react-router-dom";
import { Box } from '@mui/material';

const TableStaffLeave = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const token = {
      token: sessionStorage.getItem('token'),
      role: sessionStorage.getItem('role'),
    };

    RequirementsService.findAllLeave(token)
      .then((response) => {
        console.log(response);
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
        size: 100,
        enableEditing: false,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorFn: (row) => `${row.type} `,
        id: "type",
        header: "Leave Type",
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
        accessorKey: "startDate",
        header: "Leave Start Date",
        size: 100,
        enableEditing: false,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: "finishDate",
        header: "Leave End Date",
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
        accessorFn: (row) => ` ${row.status}  `,
            id: "Status",
            header: "Status",
            size: 100,
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
        accessorKey: "amountOfDay",
        header: "Days of Leave",
        size: 100,
        enableEditing: false,
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
    <div className="staff-leave-list-container">
      <div className="addleave">
        <div className="icon-div-mini">Staff Leave History</div>
      </div>
      <div className="table-staff-leave">
        <MaterialReactTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default TableStaffLeave;