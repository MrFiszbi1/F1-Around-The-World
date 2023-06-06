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
              <Typography>
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
              <Typography>
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
              <Typography>
                Number of races in {region}: {raceCount}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#ffffff"}>Name of races</Typography>
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
              sx={{ backgroundColor: "#b21e3c" }}
            >
              <Typography>
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
