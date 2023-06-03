import React from "react";
import { Box } from "@mui/material";
import Map from '../components/map';
import Title from '../components/title';

const GeoChart = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Title />
      <Map />
    </Box>
  );
};

export default GeoChart;
