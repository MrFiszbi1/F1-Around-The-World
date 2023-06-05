import React, { useState, useEffect, useContext } from "react";
import { Chart } from "react-google-charts";
import { Box } from "@mui/material";
import filterConstructors from "../hooks/filterConstructors.js";
import filterDrivers from "../hooks/filterDrivers.js";
import filterRaces from "../hooks/filterRaces.js";
import useFetchDrivers from "../hooks/useFetchDrivers.js";
import RegionContext from "../hooks/RegionProvider.jsx";

export default function Map() {
  const [constructorsCount, setConstructorsCount] = useState([]);
  const [driversCount, setDriversCount] = useState([]);
  const [racesCount, setRacesCount] = useState([]);
  const { setSelectedRegion } = useContext(RegionContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await filterConstructors();
      setConstructorsCount(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await filterDrivers();
      setDriversCount(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await filterRaces();
      setRacesCount(result);
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "85%",
        border: 1,
      }}
    >
      <h3>Number of drivers from each country</h3>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = racesCount[selection[0].row + 1];
              console.log("Selected : " + region);
              setSelectedRegion(region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={racesCount}
      />
    </Box>
  );
}
