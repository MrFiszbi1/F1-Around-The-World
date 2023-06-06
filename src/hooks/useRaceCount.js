import { useState, useEffect } from "react";
import useFetchRaces from "./useFetchRaces";

const useRaceCount = (region) => {
  const [raceCount, setRaceCount] = useState(0);
  const [raceNames, setRaceNames] = useState([]);

  useEffect(() => {
    const fetchRaceCountByCountry = async () => {
      try {
        const response = await useFetchRaces();

        const races = response.MRData.RaceTable.Races;
        let raceCountByCountry = 0;
        const uniqueRaceNames = new Set();

        races.forEach((race) => {
          if (race.Circuit.Location.country === region) {
            uniqueRaceNames.add(race.raceName);
            raceCountByCountry++;
          }
        });

        setRaceCount(raceCountByCountry);
        setRaceNames(Array.from(uniqueRaceNames));
      } catch (error) {
        console.error(error);
      }
    };

    fetchRaceCountByCountry();
  }, [region]);

  return { raceCount, raceNames };
};

export default useRaceCount;
