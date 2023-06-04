import useFetchDrivers from './useFetchDrivers';

const filterDrivers = async () => {
  const data = await useFetchDrivers();
  const nationalities = [];
  const uniqueNationalities = [];
  const nationalityCount = [];
  const countryNames = [
    'Italy',
    'United Kingdom',
    'Belgium',
    'United States',
    'Germany',
    'Netherlands',
    'Thailand',
    'France',
    'Spain',
    'New Zealand',
    'Sweden',
    'Brazil',
    'Hungary',
    'Denmark',
    'Monaco',
    'Canada',
    'Austria',
    'Argentina',
    'South Africa',
    'Finland',
    'Australia',
    'Switzerland',
    'Ireland',
    'Portugal',
    'Uruguay',
    'Venezuela',
    'India',
    'Argentina-Italian',
    'Czech Republic',
    'East Germany',
    'Japan',
    'Colombia',
    'Mexico',
    'Indonesia',
    'Rhodesia',
    'Poland',
    'Russia',
    'Chile',
    'American-Italian',
    'Liechtenstein',
    'Malaysia',
    'China',
  ];

  if (data) {
    const driverData = data.MRData.DriverTable.Drivers;
    if (driverData) {
      const nationalitiesArray = driverData.map((driver) => driver.nationality);
      nationalities.push(...nationalitiesArray);
    }
  }

  if (nationalities.length > 0) {
    const uniqueNationalitiesSet = new Set(nationalities);
    uniqueNationalities.push(...Array.from(uniqueNationalitiesSet));
  }

  if (uniqueNationalities.length > 0) {
    const header = ['Country', 'Number of drivers from each country'];
    let countArray = uniqueNationalities.map((uniqueNationality, index) => [
      countryNames[index],
      nationalities.filter((n) => n === uniqueNationality).length,
    ]);
    countArray.unshift(header);

    //get rid of the Argentina-Italian array and add it to Argentina
    countArray[18][1]++;
    countArray = countArray.filter((_, index) => index !== 28);

    //get rid of the East Germany array and add it to Germany
    countArray[5][1] += 3;
    countArray = countArray.filter((_, index) => index !== 29);

    //get rid of the American-Italian array and add it to United States
    countArray[4][1]++;
    countArray = countArray.filter((_, index) => index !== 37);

    nationalityCount.push(...countArray);
  }

  return nationalityCount;
};

export default filterDrivers;
