import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CardHeader,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import useRaceCount from "../hooks/useRaceCount";
import useCircuitCount from "../hooks/useCircuitCount";
import { green } from "@mui/material/colors";
import filterConstructors from "../hooks/filterConstructors.js";
import filterDrivers from "../hooks/filterDrivers.js";

const CardComponent = ({ region }) => {
  const [constructorsCount, setConstructorsCount] = useState([]);
  const [driversCount, setDriversCount] = useState([]);
  const { raceCount, raceNames } = useRaceCount(region);
  const { circuitCount, circuitNames, circuitURLs } = useCircuitCount(region);

  useEffect(() => {
    const fetchData = async () => {
      const result = await filterConstructors();
      const filteredData = result.find((item) => item[0] === region);
      if (filteredData) {
        setConstructorsCount(filteredData.slice(1));
      }
    };

    fetchData();
  }, [region]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await filterDrivers();
      const filteredData = result.find((item) => item[0] === region);
      if (filteredData) {
        setDriversCount(filteredData.slice(1));
      }
    };

    fetchData();
  }, [region]);

  return (
    <Box sx={{ width: 320 }}>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#18405f",
          opacity: 0.9,
        }}
      >
        <CardHeader
          title={<Typography variant="h6">COUNTRY STATS</Typography>}
          avatar={<QueryStatsIcon fontSize="large" />}
          sx={{
            color: "#fffffff1",
            borderBottom: "1px solid",
            borderWidth: "1px",
            paddingBottom: 1,
          }}
        />
        <CardContent>
          <Accordion
            disableGutters
            sx={{ backgroundColor: "#b21e3c", color: "white" }}
          >
            <AccordionSummary sx={{ backgroundColor: "#b21e3c" }}>
              <Typography sx={{ display: "flex", fontSize: "13px" }}>
                <GroupsIcon fontSize="small" sx={{ marginRight: "5px" }} />
                Number of constructors from {region}:{" "}
                {constructorsCount.length > 0 ? constructorsCount[0] : ""}
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion
            disableGutters
            sx={{ backgroundColor: "#b21e3c", color: "white" }}
          >
            <AccordionSummary sx={{ backgroundColor: "#b21e3c" }}>
              <Typography sx={{ display: "flex", fontSize: "13px" }}>
                <SportsMotorsportsIcon
                  fontSize="small"
                  sx={{ marginRight: "5px" }}
                />
                Number of drivers from {region}:{" "}
                {driversCount.length > 0 ? driversCount[0] : ""}
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion
            id="panel1-header"
            aria-controls="panel1-content"
            sx={{
              backgroundColor: "#bd3e58",
              color: "white",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: green[100] }} />}
              sx={{ backgroundColor: "#b21e3c" }}
            >
              <Typography sx={{ display: "flex", fontSize: "13px" }}>
                <AllInclusiveIcon
                  fontSize="small"
                  sx={{ marginRight: "5px" }}
                />
                Number of races in {region}: {raceCount}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#152b82"} fontWeight={"bold"}>
                Race's name:
              </Typography>
              <Typography>
                {raceNames.map((race, index) => (
                  <Typography key={index}>{race}</Typography>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            id="panel1-header"
            aria-controls="panel1-content"
            sx={{ backgroundColor: "#bd3e58", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: green[100] }} />}
              sx={{ backgroundColor: "#b21e3c", display: "flex" }}
            >
              <SportsScoreIcon />
              <Typography sx={{ display: "flex", fontSize: "13px" }}>
                Number of circuit in {region}: {circuitCount}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {circuitNames.map((circuit, index) => (
                  <Typography key={index}>
                    <a
                      href={circuitURLs[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}
                    >
                      {circuit}
                    </a>
                  </Typography>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardComponent;
