import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/mockData';

const Team = () => {
  // {
  //     id: 1,
  //         name: "Jon Snow",
  //     email: "jonsnow@gmail.com",
  //     age: 35,
  //     phone: "(665)121-5454",
  //     access: "admin",
  // },
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'Number',
      headerAlign: 'left',
      align: 'left',
    },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'access',
      headerName: 'Access Level',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            bgcolor={access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]}
          >
            {access === 'admin' ? <AdminPanelSettingsOutlinedIcon /> : undefined}
            {access === 'manager' ? <SecurityOutlinedIcon /> : undefined}
            {access === 'user' ? <LockOpenOutlinedIcon /> : undefined}

            <Typography sx={{ ml: '5px' }} color={colors.grey[100]}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Header title="Team" subtitle="Managing Team Member" />
      <Box
        height="75vh"
        m="40 0 0 0"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          // '& .MuiDataGrid-cell': {
          //   borderBottom: 'none',
          // },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '&. MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: colors.blueAccent[700],
            borderTop: 'none',
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
