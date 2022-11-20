import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DashBoard" subtitle="환영합니다."></Header>
      </Box>
    </Box>
  );
};

export default Dashboard;
