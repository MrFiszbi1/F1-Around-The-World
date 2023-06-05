import React, { useState, useEffect } from "react";
import filterConstructors from "../hooks/filterConstructors.js";
import filterDrivers from "../hooks/filterDrivers.js";
import filterRaces from "../hooks/filterRaces.js";

/*
//dropdown:
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

//barchar:
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
*/

import DropdownCountry from "../components/compareDropDown.jsx";
import BarChart from "../components/compareBarChart.jsx";

const CountryComparison = () => {
  const [racesCount, setRacesCount] = useState([]);
  const [driversCount, setDriversCount] = useState([]);
  const [constructorsCount, setConstructorsCount] = useState([]);
  const [data, setData] = useState([]);

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
    <div>
      <h2>This is the Bar Chart page</h2>

      <DropdownCountry setData={setData} racesCount={racesCount} driversCount={driversCount} constructorsCount={constructorsCount}/>
      <BarChart passedData={data}/>
    </div>
  );
};

export default CountryComparison;
