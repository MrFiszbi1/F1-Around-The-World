import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Map from '../components/map';
import Title from '../components/title';
import MapDataSelect from '../components/mapDataSelect';

const GeoChart = () => {
  const [map, setMap] = useState('');
  
  useEffect(() => {
    console.log(`Map is now set to: ${map}`);
  }, [map]);

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
      <MapDataSelect setMap={setMap}/>
      {map && <Map map={map} />}
    </Box>
  );
};

export default GeoChart;
