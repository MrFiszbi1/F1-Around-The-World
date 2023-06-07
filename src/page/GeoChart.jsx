import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import Map from "../components/map";
import Title from "../components/title";
import CardComponent from "../components/countryStats";
import RegionContext from "../hooks/RegionProvider.jsx";
import MapDataSelect from "../components/mapDataSelect";

const GeoChart = () => {
  const { selectedRegion } = useContext(RegionContext);
  const [map, setMap] = useState("");

  // Convert selectedRegion object to string
  const selectedRegionString = selectedRegion && selectedRegion.toString();

  // Remove punctuation and number from string to remain region name only
  const regionName =
    selectedRegionString &&
    selectedRegionString
      // .replace(/United States/g, "USA")
      .replace(/[\d.,]+/g, "");

  useEffect(() => {
    console.log(`Map is now set to: ${map}`);
  }, [map]);

  return (
    <Box
      class= "GeoChart"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title />

      <MapDataSelect setMap={setMap} />
      <Box sx={{ width: "80%", display: "flex" }}>
        {map && <Map map={map} onMapChange={setMap} />}

        <Box sx={{ height: "100%", marginLeft: "15px", paddingTop: "3.8rem" }}>
          {map !== "" && <CardComponent region={regionName} />}
        </Box>
      </Box>
    </Box>
  );
};

export default GeoChart;
