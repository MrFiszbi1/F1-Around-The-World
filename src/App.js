import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <h1>Hello From F1 Around The World</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

// url for the ergast API
const url = "https://ergast.com/api/f1.json";
const url1 = "https://ergast.com/api/f1/drivers.json";


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

fetchData(url);     //default data, default limit of 30. Working
fetchData(url1);    //driver data, default limit of 30. Working