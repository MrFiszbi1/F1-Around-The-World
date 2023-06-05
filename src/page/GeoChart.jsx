import React, { useContext } from "react";
import { Box } from "@mui/material";
import Map from "../components/map";
import Title from "../components/title";
import CardComponent from "../components/f2-sidebar";
import RegionContext from "../hooks/RegionProvider.jsx";

const GeoChart = () => {
  const { selectedRegion } = useContext(RegionContext);

  // Convert selectedRegion object to string
  const selectedRegionString = selectedRegion && selectedRegion.toString();

  // Remove punctuation and number from string to remain region name only
  const regionName =
    selectedRegionString &&
    selectedRegionString
      .replace(/United States/g, "USA")
      .replace(/[\d.,]+/g, "");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title />
      <div style={{ display: "flex", width: "95%" }}>
        <Map />
        <CardComponent region={regionName} />
      </div>
    </Box>
  );
};

export default GeoChart;
