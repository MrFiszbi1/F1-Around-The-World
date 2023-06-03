import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Button,
  Menu,
  MenuItem,
  CardHeader,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CardComponent = ({ region }) => {
  const [raceCount, setRaceCount] = useState(0);
  const [raceNames, setRaceNames] = useState([]);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  useEffect(() => {
    const fetchRaceCountByCountry = async () => {
      try {
        const response = await axios.get("http://ergast.com/api/f1.json");

        const races = response.data.MRData.RaceTable.Races;
        let raceCountByCountry = 0;
        const uniqueRaceNames = new Set(); // Use a Set to store unique race names

        races.forEach((race) => {
          if (race.Circuit.Location.country === region) {
            uniqueRaceNames.add(race.raceName); // Add each race name to the Set
            raceCountByCountry++;
          }
        });

        setRaceCount(raceCountByCountry);
        setRaceNames(Array.from(uniqueRaceNames)); // Convert the Set to an array for rendering
      } catch (error) {
        console.error(error);
      }
    };

    fetchRaceCountByCountry();
  }, [region]);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <Card sx={{ width: 300, height: 300, backgroundColor: "gray", opacity: 1 }}>
      <CardHeader
        title="This is a header"
        sx={{ color: "white", borderBottom: "solid", paddingBottom: 1 }}
      />
      <CardContent>
        <Button
          variant="text"
          onClick={handleMenuOpen}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            minWidth: "auto",
            whiteSpace: "nowrap",
          }}
        >
          Number of Races ({region}): {raceCount}
          <KeyboardArrowDownIcon />
        </Button>
        <Menu
          anchorEl={menuAnchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
                cursor: "default",
              },
            }}
          >
            Name of Race:{" "}
          </MenuItem>
          {raceNames.map((race, index) => (
            <MenuItem
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  cursor: "default",
                },
              }}
            >
              {race}
            </MenuItem>
          ))}
        </Menu>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
