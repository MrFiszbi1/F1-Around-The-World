import React, { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

export default function MapDataSelect({ setMap }) {
  const [localMap, setLocalMap] = useState('');
  const handleChange = (event) => {
    const selectedMap = event.target.value;
    setLocalMap(selectedMap);
    setMap(selectedMap);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
        <InputLabel id="select-a-map">Maps</InputLabel>
        <Select
            labelId="select-a-map"
            id="select-a-map"
            value={localMap}
            onChange={handleChange}
            autoWidth
            label="Maps"
            
        >
          <MenuItem value={'drivers'}>Map for drivers data</MenuItem>
          <MenuItem value={'constructors'}>Map for constructors data</MenuItem>
          <MenuItem value={'races'}>Map for races data</MenuItem>
        </Select>
        <FormHelperText>Select a map to render</FormHelperText>
      </FormControl>
    </div>
  );
}