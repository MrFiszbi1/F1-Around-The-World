import React, { useState, useEffect } from "react";
import filterConstructors from "../hooks/filterConstructors.js";
import filterDrivers from "../hooks/filterDrivers.js";
import filterRaces from "../hooks/filterRaces.js";

const CountryComparison = () => {
  const [constructorsCount, setConstructorsCount] = useState([]);
  const [driversCount, setDriversCount] = useState([]);
  const [racesCount, setRacesCount] = useState([]);

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

      <BarChart />
      <DropdownCountry />
    </div>
  );
};

export default CountryComparison;

//------------------For my features--------------------------
//barchar:
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const labels = ["races", "drivers", "constructors"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Some Country",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [1, 2, 3],
    },
  ],
};

const BarChart = () => {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

//dropdown:
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

//from races data
const countryNames1 = [
  "United Kingdom",
  "Monaco",
  "United States",
  "Switzerland",
  "Belgium",
  "France",
  "Italy",
  "Germany",
  "Spain",
  "Netherlands",
  "Argentina",
  "Portugal",
  "Morocco",
  "South Africa",
  "Mexico",
  "Austria",
  "Canada",
  "Brazil",
  "Sweden",
  "Japan",
  "Australia",
  "Hungary",
  "Malaysia",
  "Bahrain",
  "China",
  "Turkey",
  "Singapore",
  "United Arab Emirates",
  "South Korea",
  "India",
  "Russia",
  "Azerbaijan",
];

//from drivers data
const countryNames2 = [
  "Italy",
  "United Kingdom",
  "Belgium",
  "United States",
  "Germany",
  "Netherlands",
  "Thailand",
  "France",
  "Spain",
  "New Zealand",
  "Sweden",
  "Brazil",
  "Hungary",
  "Denmark",
  "Monaco",
  "Canada",
  "Austria",
  "Argentina",
  "South Africa",
  "Finland",
  "Australia",
  "Switzerland",
  "Ireland",
  "Portugal",
  "Uruguay",
  "Venezuela",
  "India",
  "Argentina-Italian",
  "Czech Republic",
  "East Germany",
  "Japan",
  "Colombia",
  "Mexico",
  "Indonesia",
  "Rhodesia",
  "Poland",
  "Russia",
  "Chile",
  "American-Italian",
  "Liechtenstein",
  "Malaysia",
  "China",
];

//from constructors data
const countryNames3 = [
  "United States",
  "Germany",
  "France",
  "Switzerland",
  "Italy",
  "United Kingdom",
  "New Zealand",
  "Netherlands",
  "Malaysia",
  "Germany",
  "Belgium",
  "Brazil",
  "India",
  "Japan",
  "Spain",
  "Ireland",
  "South Africa",
  "Russia",
  "Australia",
  "Rhodesia",
  "Mexico",
  "Austria",
  "Canada",
  "China",
];

//Array comes from all unique country names
const dropdownOptions = [
  "United Kingdom",
  "Monaco",
  "United States",
  "Switzerland",
  "Belgium",
  "France",
  "Italy",
  "Germany",
  "Spain",
  "Netherlands",
  "Argentina",
  "Portugal",
  "Morocco",
  "South Africa",
  "Mexico",
  "Austria",
  "Canada",
  "Brazil",
  "Sweden",
  "Japan",
  "Australia",
  "Hungary",
  "Malaysia",
  "Bahrain",
  "China",
  "Turkey",
  "Singapore",
  "United Arab Emirates",
  "South Korea",
  "India",
  "Russia",
  "Azerbaijan",
  "Thailand",
  "New Zealand",
  "Denmark",
  "Finland",
  "Ireland",
  "Uruguay",
  "Venezuela",
  "Argentina-Italian",
  "Czech Republic",
  "East Germany",
  "Colombia",
  "Indonesia",
  "Rhodesia",
  "Poland",
  "Chile",
  "American-Italian",
  "Liechtenstein",
];

//Used to print out the array of dropdown options
let allCountryNames = countryNames1.concat(countryNames2).concat(countryNames3);
const uniqueCountrySet = new Set(allCountryNames);
console.log("All country Names: ", allCountryNames);
console.log("All unique country Names: ", uniqueCountrySet);
console.log(
  "Length of 3 country data sets: ",
  countryNames1.length,
  countryNames2.length,
  countryNames3.length
);
//dropdown options should match uniqueCountrySet exactly. Matches.
console.log("Dropdown options: ", dropdownOptions);


const DropdownCountry = () => {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Country"
          onChange="hi"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
