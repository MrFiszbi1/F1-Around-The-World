import useFetchConstructors from './useFetchConstructors';

const filterConstructors = async () => {
  const data = await useFetchConstructors();
  const nationalities = [];
  const uniqueNationalities = [];
  const nationalityCount = [];
  const countryNames = [
    'United States',
    'Germany',
    'France',
    'Switzerland',
    'Italy',
    'United Kingdom',
    'New Zealand',
    'Netherlands',
    'Malaysia',
    'Germany',
    'Belgium',
    'Brazil',
    'India',
    'Japan',
    'Spain',
    'Ireland',
    'South Africa',
    'Russia',
    'Australia',
    'Rhodesia',
    'Mexico',
    'Austria',
    'Canada',
    'China',
  ];

  if (data) {
    const constructorData = data.MRData.ConstructorTable.Constructors;
    if (constructorData) {
      const nationalitiesArray = constructorData.map(
        (constructor) => constructor.nationality
      );
      nationalities.push(...nationalitiesArray);
    }
  }

  if (nationalities.length > 0) {
    const uniqueNationalitiesSet = new Set(nationalities);
    uniqueNationalities.push(...Array.from(uniqueNationalitiesSet));
  }

  if (uniqueNationalities.length > 0) {
    const header = ['Country', 'Number of constructors from each country'];
    let countArray = uniqueNationalities.map((uniqueNationality, index) => [
      countryNames[index],
      nationalities.filter((n) => n === uniqueNationality).length,
    ]);
    countArray.unshift(header);
    countArray[1][1]++;
    countArray = countArray.filter((_, index) => index !== 10);
    nationalityCount.push(...countArray);
  }

  return nationalityCount;
};

export default filterConstructors;
