import React, { useState } from "react";

//dropdown:
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

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

export default function DropdownCountry({setData, racesCount, driversCount, constructorsCount}) {
  let data = [0, 0, 0];   //default data
  const [countrySelected, setCountrySelected] = useState([]);

  //Now correctly changes data according to what the user picks, but takes some time to update
  const handleChange = (event) => {
    console.log(
      `This is handle change, getting the value: ${event.target.value}`
    );
    setCountrySelected(event.target.value);

    console.log(data); //Is the barchart data

    for (let i = 0; i < racesCount.length; i++) {
      if (racesCount[i][0] === event.target.value) {
        //racesCount[i][0] is country
        data[0] = racesCount[i][1]; //racesCount[i][1] is count
      }
    }
    for (let i = 0; i < driversCount.length; i++) {
      if (driversCount[i][0] === event.target.value) {
        //driversCount[i][0] is country
        data[1] = driversCount[i][1]; //driversCount[i][1] is count
      }
    }
    for (let i = 0; i < constructorsCount.length; i++) {
      if (constructorsCount[i][0] === event.target.value) {
        //constructorsCount[i][0] is country
        data[2] = constructorsCount[i][1]; //constructorsCount[i][1] is count
      }
    }

    setData(data);    //setData sets the barchart data
  };

  //XXX: Fill in the rest of the dropdown options in menu item
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={countrySelected}
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
}
