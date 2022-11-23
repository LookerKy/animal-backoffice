import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { mockDataInvoices } from '../../data/mockData';

const Invoices = () => {
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
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: params => <Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography>,
    },
    { field: 'date', headerName: 'Date', flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
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
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
