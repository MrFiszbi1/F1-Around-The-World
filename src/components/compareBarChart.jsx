import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

//XXX: fix scaling issue, set both barcharts to the same scale
export default function BarChart({ passedData, passedLabel, backgroundColor, borderColor}) {
  //barchart component and data:
  const [barData, setBarData] = useState([]);
  const [barLabel, setBarLabel] = useState([]);

  useEffect(() => {
    setBarData(passedData);
    setBarLabel(passedLabel);
    console.log("updated bar data: ", passedData);
  }, [passedData, passedLabel]);

  const labels = ["races", "drivers", "constructors"];
  let data = {
    labels: labels,
    datasets: [
      {
        label: barLabel,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
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
