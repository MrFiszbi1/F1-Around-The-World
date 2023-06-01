import useFetchData from "./useFetchData"; //returns false if unable to fetch data.

const useFetchCheck = async (url, file) => {
  const data = await useFetchData(url);

  if (data === false) {
    console.log(`API Error! Using backup file ${file} instead`);
    data = await useFetchData(file);
  } else {
    console.log(`Successfully fetched data from API ${url}`);
  }

  return data;
};

export default useFetchCheck;
