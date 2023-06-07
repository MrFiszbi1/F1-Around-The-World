import React, { useState, useEffect } from "react";
import filterConstructors from "../hooks/filterConstructors.js";
import filterDrivers from "../hooks/filterDrivers.js";
import filterRaces from "../hooks/filterRaces.js";
import DropdownCountry from "../components/compareDropDown.jsx";
import BarChart from "../components/compareBarChart.jsx";
import { Grid } from "@mui/material";

const CountryComparison = () => {
  const [racesCount, setRacesCount] = useState([]);
  const [driversCount, setDriversCount] = useState([]);
  const [constructorsCount, setConstructorsCount] = useState([]);
  const [data1, setData1] = useState([]);
  const [label1, setLabel1] = useState([]);
  const [data2, setData2] = useState([]);
  const [label2, setLabel2] = useState([]);

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

  //red and blue bar chart colors
  return (
    <div class="CountryComparison">
      <h2>Compare any 2 Countries</h2>

      <Grid container spacing={5}>
        <Grid item xs={6}>
          <DropdownCountry
            label={"Country 1"}
            setData={setData1}
            setLabel={setLabel1}
            racesCount={racesCount}
            driversCount={driversCount}
            constructorsCount={constructorsCount}
          />
        </Grid>
        <Grid item xs={6}>
          <DropdownCountry
            label={"Country 2"}
            setData={setData2}
            setLabel={setLabel2}
            racesCount={racesCount}
            driversCount={driversCount}
            constructorsCount={constructorsCount}
          />
        </Grid>
        <Grid item xs={12}>
          <BarChart
            passedData1={data1}
            passedLabel1={label1}
            backgroundColor1={"#F44336"}
            borderColor1={"#F44336"}
            passedData2={data2}
            passedLabel2={label2}
            backgroundColor2={"#1E88E5"}
            borderColor2={"#1E88E5"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CountryComparison;
