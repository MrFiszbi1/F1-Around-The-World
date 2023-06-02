import useFetchCheck from "./useFetchCheck";

// urls for the ergast API, fetching up to 1000 data points
const url = "http://ergast.com/api/f1.json?limit=1000";

// downloaded files linked
const file = "./data/races.json";

const useFetchRaces = async () => {
  return useFetchCheck(url, file);
};

export default useFetchRaces;
