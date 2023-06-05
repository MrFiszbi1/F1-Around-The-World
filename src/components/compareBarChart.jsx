import React, { useState, useEffect } from "react";

//barchar:
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

//XXX: fix scaling issue, set both barcharts to the same scale
//XXX: add the country name in the data label?
export default function BarChart({passedData}) {
  //barchart component and data:
  const [barData, setBarData] = useState([]);

  useEffect(() => {
    setBarData(passedData);
    console.log("updated bar data: ", passedData);
  },[passedData]);

  const labels = ["races", "drivers", "constructors"];
  let data = {
    labels: labels,
    datasets: [
      {
        label: "",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: barData,
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
}
