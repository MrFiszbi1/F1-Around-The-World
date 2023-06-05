import React from "react";
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

const CardComponent = ({ region }) => {
  const { raceCount, raceNames } = useRaceCount(region);
  const { circuitCount, circuitNames, circuitURLs } = useCircuitCount(region);

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
