import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

//Array comes from all unique country names we have data for
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

export default function DropdownCountry({
  label,
  setData,
  setLabel,
  racesCount,
  driversCount,
  constructorsCount,
}) {
  let data = [0, 0, 0]; //default data
  const [countrySelected, setCountrySelected] = useState([]);

  console.log(label);

  //Now correctly changes data according to what the user picks, but takes some time to update
  const handleChange = (event) => {
    console.log(
      `This is handle change, getting the value: ${event.target.value}`
    );
    setCountrySelected(event.target.value);
    setLabel(event.target.value);

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
    console.log(data); //Is the barchart data
    setData(data); //setData sets the barchart data
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={countrySelected}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
          <MenuItem value={"Monaco"}>Monaco</MenuItem>
          <MenuItem value={"United States"}>United States</MenuItem>
          <MenuItem value={"Switzerland"}>Switzerland</MenuItem>
          <MenuItem value={"Belgium"}>Belgium</MenuItem>
          <MenuItem value={"France"}>France</MenuItem>
          <MenuItem value={"Italy"}>Italy</MenuItem>
          <MenuItem value={"Germany"}>Germany</MenuItem>
          <MenuItem value={"Spain"}>Spain</MenuItem>
          <MenuItem value={"Netherlands"}>Netherlands</MenuItem>
          <MenuItem value={"Argentina"}>Argentina</MenuItem>
          <MenuItem value={"Portugal"}>Portugal</MenuItem>
          <MenuItem value={"Morocco"}>Morocco</MenuItem>
          <MenuItem value={"South Africa"}>South Africa</MenuItem>
          <MenuItem value={"Mexico"}>Mexico</MenuItem>
          <MenuItem value={"Austria"}>Austria</MenuItem>
          <MenuItem value={"Canada"}>Canada</MenuItem>
          <MenuItem value={"Brazil"}>Brazil</MenuItem>
          <MenuItem value={"Sweden"}>Sweden</MenuItem>
          <MenuItem value={"Japan"}>Japan</MenuItem>
          <MenuItem value={"Australia"}>Australia</MenuItem>
          <MenuItem value={"Hungary"}>Hungary</MenuItem>
          <MenuItem value={"Malaysia"}>Malaysia</MenuItem>
          <MenuItem value={"Bahrain"}>Bahrain</MenuItem>
          <MenuItem value={"China"}>China</MenuItem>
          <MenuItem value={"Turkey"}>Turkey</MenuItem>
          <MenuItem value={"Singapore"}>Singapore</MenuItem>
          <MenuItem value={"United Arab Emirates"}>United Arab Emirates</MenuItem>
          <MenuItem value={"South Korea"}>South Korea</MenuItem>
          <MenuItem value={"India"}>India</MenuItem>
          <MenuItem value={"Russia"}>Russia</MenuItem>
          <MenuItem value={"Azerbaijan"}>Azerbaijan</MenuItem>
          <MenuItem value={"Thailand"}>Thailand</MenuItem>
          <MenuItem value={"New Zealand"}>New Zealand</MenuItem>
          <MenuItem value={"Denmark"}>Denmark</MenuItem>
          <MenuItem value={"Finland"}>Finland</MenuItem>
          <MenuItem value={"Ireland"}>Ireland</MenuItem>
          <MenuItem value={"Uruguay"}>Uruguay</MenuItem>
          <MenuItem value={"Venezuela"}>Venezuela</MenuItem>
          <MenuItem value={"Argentina-Italian"}>Argentina-Italian</MenuItem>
          <MenuItem value={"Czech Republic"}>Czech Republic</MenuItem>
          <MenuItem value={"East Germany"}>East Germany</MenuItem>
          <MenuItem value={"Colombia"}>Colombia</MenuItem>
          <MenuItem value={"Indonesia"}>Indonesia</MenuItem>
          <MenuItem value={"Rhodesia"}>Rhodesia</MenuItem>
          <MenuItem value={"Poland"}>Poland</MenuItem>
          <MenuItem value={"Chile"}>Chile</MenuItem>
          <MenuItem value={"American-Italian"}>American-Italian</MenuItem>
          <MenuItem value={"Liechtenstein"}>Liechtenstein</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
