import "./styles.css";
import BarChart from "./components/f3-barcharts";
import DropdownCountry from "./components/f3-dropdown";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello From F1 Around The World</h1>
      <h2>Start editing to see some magic happen!</h2>

      <BarChart />
      <DropdownCountry />

    </div>
  );
}
