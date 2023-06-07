import React from "react";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        color: "white",
      }}
    >
      <h1>Welcome to F1 Around The World</h1>
      <h5>By Jaafar Rodgers, Minh Ma, and Gabriel Sampang</h5>
        <p>
          This is a Dashboard website using F1 APIs. The goal is to visualize F1 data through different visualizations.
        </p>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
        <p>There are two main pages:</p>
        <ul>
          <li>A world map to visualize data around countries that participate in F1</li>
          <li>A comparison page to compare data around two different countries</li>
        </ul>
        </Box>
      <p>Take a look around and have fun!</p>
    </Box>
  );
};

export default Home;
