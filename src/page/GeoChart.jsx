import React from "react";
import CardComponent from "../components/f2-sidebar";

const GeoChart = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>This is the Geo Chart page</h2>
      <div style={{ alignSelf: "flex-end" }}>
        <CardComponent region={"USA"} />
      </div>
    </div>
  );
};

export default GeoChart;
