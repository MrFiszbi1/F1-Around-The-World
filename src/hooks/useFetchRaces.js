import useFetchData from "./useFetchData"; //returns false if unable to fetch data.

// urls for the ergast API, fetching up to 1000 data points
const races_url = "http://ergast.com/api/f1.json?limit=1000";

// downloaded files linked
const races_file = "./data/races.json";

const useFetchRaces = async () => {
  const raceData = await useFetchData(races_url);

  if (raceData === false) {
    console.log("API Error! Using backup races.json file instead");
    raceData = await useFetchData(races_file);
  } else {
    console.log("Successfully fetched races data from API");
  }

  return raceData;
};

export default useFetchRaces;
