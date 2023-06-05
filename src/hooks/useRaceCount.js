import { useState, useEffect } from "react";
import axios from "axios";

const useRaceCount = (region) => {
  const [raceCount, setRaceCount] = useState(0);
  const [raceNames, setRaceNames] = useState([]);

  useEffect(() => {
    const fetchRaceCountByCountry = async () => {
      try {
        const response = await axios.get(
          "http://ergast.com/api/f1.json?limit=1000"
        );

        const races = response.data.MRData.RaceTable.Races;
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
