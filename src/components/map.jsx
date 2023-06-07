import React, { useState, useEffect, useContext } from "react";
import { Chart } from "react-google-charts";
import { Box } from "@mui/material";
import filterConstructors from "../hooks/filterConstructors.js";
import filterDrivers from "../hooks/filterDrivers.js";
import filterRaces from "../hooks/filterRaces.js";
import useFetchDrivers from "../hooks/useFetchDrivers.js";
import RegionContext from "../hooks/RegionProvider.jsx";

export default function Map({ map, onMapChange }) {
  const [constructorsCount, setConstructorsCount] = useState([]);
  const [driversCount, setDriversCount] = useState([]);
  const [racesCount, setRacesCount] = useState([]);
  const [dataSetInUse, setDataSetInUse] = useState([]);
  const [dataTitle, setDataTitle] = useState("No data set selected");
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

  useEffect(() => {
    if (map === "drivers") {
      setDataSetInUse(driversCount);
      setDataTitle("Number of drivers from each country");
    } else if (map === "constructors") {
      setDataSetInUse(constructorsCount);
      setDataTitle("Number of constructors from each country");
    } else {
      setDataSetInUse(racesCount);
      setDataTitle("Number races held in each country from 1950 to 2019");
    }
  }, [map, constructorsCount, driversCount, racesCount]);

  useEffect(() => {
    // Call the onMapChange callback function when map selection changes
    onMapChange(map);
  }, [map, onMapChange]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        border: "none",
      }}
    >
      <h3>{dataTitle}</h3>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = dataSetInUse[selection[0].row + 1];
              console.log("Selected : " + region);
              setSelectedRegion(region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={dataSetInUse}
      />
    </Box>
  );
}
