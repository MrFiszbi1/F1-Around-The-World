import React from "react";
import { Chart } from "react-google-charts";
import { Box } from "@mui/material";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

export default function Map() {
  return (
    <Box sx={{display: 'flex', width: '75%', border: 1 }}>
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
    />
    </Box>
  );
}
