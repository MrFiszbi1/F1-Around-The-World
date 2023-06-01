import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello From F1 Around The World</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

// --------------------- Everything following is proof of concept/demo ------------

// urls for the ergast API, fetching up to 1000 data points
const races_url = "http://ergast.com/api/f1.json?limit=1000";
const drivers_url = "http://ergast.com/api/f1/drivers.json?limit=1000";
const constructors_url = "http://ergast.com/api/f1/constructors.json?limit=300";

// downloaded files linked
const races_file = "./data/races.json";
const drivers_file = "./data/drivers.json";
const constructors_file = "./data/constructors.json";

// deprecated, now in hooks folder
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finally block, runs regardsless. Fill in");
  }
};

//Demo: fetching from the API - uncomment to see it work
// fetchData(races_url); //races data, limit 1000. Working
// fetchData(drivers_url); //driver data, limit 1000. Working
// fetchData(constructors_url); //driver data, limit 300. Working

//Demo: fetching from the downloaded files - uncomment to see it work
// fetchData(races_file);
// fetchData(drivers_file);
// fetchData(constructors_file);

//Demo: fetch using an imported hook using API or downloaded
import useFetchData from "./hooks/useFetchData"; //returns false if unable to fetch data.

//Demo: fetch using an imported hook using API or downloaded
console.log(await useFetchData(races_url));
console.log(await useFetchData(races_file));

//Demo: Location of the first Race in the data. (can eventually loop over entire Races array)
// when refactoring, can destructure to get the country
let raceData = await useFetchData(races_url);
console.log(raceData.MRData.RaceTable.Races[0].Circuit.Location.country);

//Demo WIP: fetching data from API but if it fails fetch from the backup
// let bad_races_url = "oopsasaseesdiudhlejh";

//XXX: not running as expected
// if (useFetchData(races_url) === true) {
//   console.log("using browser API");
//   raceData = useFetchData(races_url);
// } else {
//   console.log("using backup file");
//   raceData = useFetchData(races_file);
// }
// console.log(raceData);

//Used for downloading the data
//print data as a string in the console, copy and place in data folder
// const printData = async (url) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     const dataString = JSON.stringify(data);
//     console.log(dataString);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log("Finally block, runs regardsless. Fill in");
//   }
// };
// console.log("Printing Key Data:");
// printData(races_url); //races data, limit 1000. Working
// printData(drivers_url); //driver data, limit 1000. Working
// printData(constructors_url); //driver data, limit 300. Working
