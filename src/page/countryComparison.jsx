import React, { useState, useEffect } from "react";
import filterConstructors from "../hooks/filterConstructors.js";
import filterDrivers from "../hooks/filterDrivers.js";
import filterRaces from "../hooks/filterRaces.js";
import DropdownCountry from "../components/compareDropDown.jsx";
import BarChart from "../components/compareBarChart.jsx";

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
    <div>
      <h2>Compare any 2 Countries</h2>

      <DropdownCountry
        setData={setData1}
        setLabel={setLabel1}
        racesCount={racesCount}
        driversCount={driversCount}
        constructorsCount={constructorsCount}
      />
      <DropdownCountry
        setData={setData2}
        setLabel={setLabel2}
        racesCount={racesCount}
        driversCount={driversCount}
        constructorsCount={constructorsCount}
      />      
      <BarChart passedData={data1} passedLabel={label1} backgroundColor={"#F44336"} borderColor={"#F44336"}/>
      <BarChart passedData={data2} passedLabel={label2} backgroundColor={"#1E88E5"} borderColor={"#1E88E5"}/>
    </div>
  );
};

export default CountryComparison;
