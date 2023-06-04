import useFetchCheck from './useFetchCheck';

// urls for the ergast API, fetching up to 1000 data points
const url = 'http://ergast.com/api/f1/drivers.json?limit=1000';

// downloaded files linked
const file = './data/drivers.json';

const useFetchDrivers = async () => {
  return useFetchCheck(url, file);
};

export default useFetchDrivers;
