import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { Box } from "@mui/material";
import axios from "axios";

const url = "http://ergast.com/api/f1/constructors.json?limit=300";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []);
  
  return data;
};

export default function Map() {
  const data = useFetchData(url);
  const [nationalities, setNationalities] = useState([]);
  const [uniqueNationalities, setUniqueNationalities] = useState([]);
  const [nationalityCount, setNationalityCount] = useState([]);
  const countryNames = 
  [
    'United States',
    'Germany',
    'France',
    'Switzerland',
    'Italy',
    'United Kingdom',
    'New Zealand',
    'Netherlands',
    'Malaysia',
    'Germany',
    'Belgium',
    'Brazil',
    'India',
    'Japan',
    'Spain',
    'Ireland',
    'South Africa',
    'Russia',
    'Australia',
    'Rhodesia',
    'Mexico',
    'Austria',
    'Canada',
    'China'
  ];

  useEffect(() => {
    if (data) {
      const constructorData = data.MRData.ConstructorTable.Constructors;
      if (constructorData) {
        const nationalitiesArray = constructorData.map(
          (constructor) => constructor.nationality
        );
        setNationalities(nationalitiesArray);
      }
    }
  }, [data]);

  useEffect(() => {
    if (nationalities.length > 0) {
      const uniqueNationalitiesSet = new Set(nationalities);
      setUniqueNationalities(Array.from(uniqueNationalitiesSet));
    }
  }, [nationalities.length]);

  useEffect(() => {
    if (uniqueNationalities.length > 0) {
      const header = ["Country", "Number of constructors from each country"];
      let countArray = uniqueNationalities.map((uniqueNationality, index) => ([
        countryNames[index],
        nationalities.filter((n) => n === uniqueNationality).length,
      ]));
      countArray.unshift(header);
      countArray[1][1]++;
      countArray = countArray.filter((_, index) => index !== 10);
      setNationalityCount(countArray);
    }
  }, [uniqueNationalities.length]);

  console.log(data);
  console.log(nationalities);
  console.log(uniqueNationalities);
  console.log(nationalityCount);

  return (
    <Box sx={{
        display: 'flex',           
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        width: '75%', 
        border: 1,
    }}>
        <h3>Number of constructors from each country</h3>
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
        data={nationalityCount}
        />
    </Box>
  );
}
