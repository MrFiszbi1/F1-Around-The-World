import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <h1>Hello From F1 Around The World</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

// urls for the ergast API, fetching up to 1000 data points
const races_url = "http://ergast.com/api/f1.json?limit=1000";
const drivers_url = "http://ergast.com/api/f1/drivers.json?limit=1000";
const constructors_url = "http://ergast.com/api/f1/constructors.json?limit=300"

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

fetchData(races_url);           //races data, limit 1000. Working
fetchData(drivers_url);         //driver data, limit 1000. Working
fetchData(constructors_url);    //driver data, limit 300. Working

//print data as a string in the console, copy and place in data folder
const printData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const dataString = JSON.stringify(data);
    console.log(dataString);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finally block, runs regardsless. Fill in");
  }
};

console.log("Printing Key Data:");
printData(races_url);           //races data, limit 1000. Working
printData(drivers_url);         //driver data, limit 1000. Working
printData(constructors_url);    //driver data, limit 300. Working
