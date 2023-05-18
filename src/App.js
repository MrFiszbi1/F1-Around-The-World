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
const url = "https://ergast.com/api/f1.json?limit=1000";
const url1 = "https://ergast.com/api/f1/drivers.json?limit=1000";

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

fetchData(url);     //default data, limit 1000. Working
fetchData(url1);    //driver data, limit 1000. Working