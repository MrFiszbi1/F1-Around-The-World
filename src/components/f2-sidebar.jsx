// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Card,
//   CardContent,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   CardHeader,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const CardComponent = ({ region }) => {
//   const [raceCount, setRaceCount] = useState(0);
//   const [raceNames, setRaceNames] = useState([]);

//   useEffect(() => {
//     const fetchRaceCountByCountry = async () => {
//       try {
//         const response = await axios.get("http://ergast.com/api/f1.json");

//         const races = response.data.MRData.RaceTable.Races;
//         let raceCountByCountry = 0;
//         const uniqueRaceNames = new Set(); // Use a Set to store unique race names

//         races.forEach((race) => {
//           if (race.Circuit.Location.country === region) {
//             uniqueRaceNames.add(race.raceName); // Add each race name to the Set
//             raceCountByCountry++;
//           }
//         });

//         setRaceCount(raceCountByCountry);
//         setRaceNames(Array.from(uniqueRaceNames)); // Convert the Set to an array for rendering
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchRaceCountByCountry();
//   }, [region]);

//   return (
//     <Card sx={{ width: 300, height: 300, backgroundColor: "gray", opacity: 1 }}>
//       <CardHeader
//         title="This is a header"
//         sx={{ color: "white", borderBottom: "solid", paddingBottom: 1 }}
//       />
//       <CardContent>
//         <Accordion
//           id="panel1-header"
//           aria-controls="panel1-content"
//           expandIcon={<ExpandMoreIcon color="disabled" />}
//         >
//           <AccordionSummary>
//             <Typography>
//               Number of Races ({region}): {raceCount}
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               {raceNames.map((race, index) => (
//                 <span key={index}>{race}</span>
//               ))}
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </CardContent>
//     </Card>
//   );
// };

// export default CardComponent;

import React from "react";
import {
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CardHeader,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useRaceCount from "../hooks/useRaceCount";

const CardComponent = ({ region }) => {
  const { raceCount, raceNames } = useRaceCount(region);

  return (
    <Card sx={{ width: 300, height: 300, backgroundColor: "gray", opacity: 1 }}>
      <CardHeader
        title="This is a header"
        sx={{ color: "white", borderBottom: "solid", paddingBottom: 1 }}
      />
      <CardContent>
        <Accordion
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon color="disabled" />}
        >
          <AccordionSummary>
            <Typography>
              Number of Races ({region}): {raceCount}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {raceNames.map((race, index) => (
                <span key={index}>{race}</span>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
