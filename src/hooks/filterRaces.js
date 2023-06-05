import useFetchRaces from './useFetchRaces';

const filterRaces = async () => {
  const data = await useFetchRaces();
  const nationalities = [];
  const uniqueNationalities = [];
  const nationalityCount = [];
  const countryNames = [
    'United Kingdom',
    'Monaco',
    'United States',
    'Switzerland',
    'Belgium',
    'France',
    'Italy',
    'Germany',
    'Spain',
    'Netherlands',
    'Argentina',
    'Portugal',
    'Morocco',
    'South Africa',
    'Mexico',
    'Austria',
    'Canada',
    'Brazil',
    'Sweden',
    'Japan',
    'Australia',
    'Hungary',
    'Malaysia',
    'Bahrain',
    'China',
    'Turkey',
    'Singapore',
    'United Arab Emirates',
    'South Korea',
    'India',
    'Russia',
    'Azerbaijan',
  ];

  if (data) {
    console.log(data);
    const raceData = data.MRData.RaceTable.Races;
    if (raceData) {
      const nationalitiesArray = raceData.map(
        (race) => race.Circuit.Location.country
      );
      nationalities.push(...nationalitiesArray);
    }
  }

  if (nationalities.length > 0) {
    const uniqueNationalitiesSet = new Set(nationalities);
    uniqueNationalities.push(...Array.from(uniqueNationalitiesSet));
  }

  if (uniqueNationalities.length > 0) {
    const header = ['Country', 'Number of races held in each country'];
    let countArray = uniqueNationalities.map((uniqueNationality, index) => [
      countryNames[index],
      nationalities.filter((n) => n === uniqueNationality).length,
    ]);
    countArray.unshift(header);

    nationalityCount.push(...countArray);
  }

  return nationalityCount;
};

export default filterRaces;
