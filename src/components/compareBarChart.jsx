import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function BarChart({
  passedData1,
  passedLabel1,
  backgroundColor1,
  borderColor1,
  passedData2,
  passedLabel2,
  backgroundColor2,
  borderColor2,
}) {
  //barchart component and data:
  const [barData1, setBarData1] = useState([]);
  const [barLabel1, setBarLabel1] = useState([]);
  const [barData2, setBarData2] = useState([]);
  const [barLabel2, setBarLabel2] = useState([]);

  useEffect(() => {
    setBarData1(passedData1);
    setBarLabel1(passedLabel1);
    setBarData2(passedData2);
    setBarLabel2(passedLabel2);
    console.log("updated bar data: ", passedData1, passedData2);
  }, [passedData1, passedLabel1, passedData2, passedLabel2]);

  const labels = ["races", "drivers", "constructors"];
  let data = {
    labels: labels,
    datasets: [
      {
        label: barLabel1,
        backgroundColor: backgroundColor1,
        borderColor: borderColor1,
        data: barData1,
      },
      {
        label: barLabel2,
        backgroundColor: backgroundColor2,
        borderColor: borderColor2,
        data: barData2,
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
}
