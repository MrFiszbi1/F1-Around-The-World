import React, { useState, useEffect } from "react";
import filterConstructors from "../hooks/filterConstructors.js";
import filterDrivers from "../hooks/filterDrivers.js";
import filterRaces from "../hooks/filterRaces.js";

//dropdown:
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

//barchar:
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

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

  useEffect(() => {
  }, [data]);

  //------------------For my features--------------------------
  //dropdown component and data:

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
  let allCountryNames = countryNames1
    .concat(countryNames2)
    .concat(countryNames3);
  const uniqueCountrySet = new Set(allCountryNames);
  console.log("All country Names: ", allCountryNames);
  console.log("All unique country Names: ", uniqueCountrySet);
  console.log(
    "Length of 3 country data sets: ",
    countryNames1.length,
    countryNames2.length,
    countryNames3.length
  );
  //dropdown options should match uniqueCountrySet exactly. Verified.
  console.log("Dropdown options: ", dropdownOptions);

  console.log("Check to verify handle change: ", racesCount, driversCount, constructorsCount);     //Helps for verifying handleChange

  //Now correctly changes data according to what the user picks, but takes some time to update
  const handleChange = (event) => {
    console.log(
      `This is handle change, getting the value: ${event.target.value}`
    );

    console.log(data); //Is the barchart data
    
    //Default vals
    data.datasets[0] = 0;
    data.datasets[1] = 0;
    data.datasets[2] = 0;

    //XXX: need to filter the data to a specific value
    for (let i = 0; i < racesCount.length; i++) {
      if(racesCount[i][0] === event.target.value) {     //racesCount[i][0] is country
        data.datasets[0] = racesCount[i][1];            //racesCount[i][1] is count
      }
    }
    for (let i = 0; i < driversCount.length; i++) {
      if(driversCount[i][0] === event.target.value) {     //driversCount[i][0] is country
        data.datasets[1] = driversCount[i][1];            //driversCount[i][1] is count
      }
    }
    for (let i = 0; i < constructorsCount.length; i++) {
      if(constructorsCount[i][0] === event.target.value) {     //constructorsCount[i][0] is country
        data.datasets[2] = constructorsCount[i][1];            //constructorsCount[i][1] is count
      }
    }
  };

  //XXX: Fill in the rest of the dropdown options in menu item
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
            onChange={handleChange}
          >
            <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
            <MenuItem value={"Monaco"}>Monaco</MenuItem>
            <MenuItem value={"United States"}>United States</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  };

  //barchart component and data:
  const labels = ["races", "drivers", "constructors"];
  let data = {
    labels: labels,
    datasets: [
      {
        label: "Default",
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

  return (
    <div>
      <h2>This is the Bar Chart page</h2>

      <DropdownCountry />
      <BarChart />
    </div>
  );
};

export default CountryComparison;
