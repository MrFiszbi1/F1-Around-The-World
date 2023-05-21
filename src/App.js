import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello From F1 Around The World</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const url = " https://v1.formula-1.api-sports.io/";

const fetchData = async () => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("x-apisports-key", "1f53d1ec4846282c849fda36b811b8b0");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://v1.formula-1.api-sports.io/races?competition=23&season=2021",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  } catch (error) {
    console.log(error);
  }
};

fetchData();
