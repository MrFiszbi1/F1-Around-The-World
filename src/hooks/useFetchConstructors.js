import useFetchCheck from './useFetchCheck';

// urls for the ergast API, fetching up to 1000 data points
const url = 'http://ergast.com/api/f1/constructors.json?limit=300';

// downloaded files linked
const file = './data/constructors.json';

const useFetchConstructors = async () => {
  return useFetchCheck(url, file);
};

export default useFetchConstructors;
