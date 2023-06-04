import { useState, useEffect } from "react";
import axios from "axios";

const useCircuitCount = (region) => {
  const [circuitCount, setCircuitCount] = useState(0);
  const [circuitNames, setCircuitNames] = useState([]);
  const [circuitURLs, setCircuitURLs] = useState([]);

  useEffect(() => {
    const fetchCircuitCountByCountry = async () => {
      try {
        const response = await axios.get(
          "http://ergast.com/api/f1/circuits.json"
        );

        const circuits = response.data.MRData.CircuitTable.Circuits;
        let countByCountry = 0;
        const uniqueCircuitNames = new Set();
        const circuitURLsArr = [];

        circuits.forEach((circuit) => {
          if (circuit.Location.country === region) {
            uniqueCircuitNames.add(circuit.circuitName);
            circuitURLsArr.push(circuit.url);
            countByCountry++;
          }
        });

        setCircuitCount(countByCountry);
        setCircuitNames(Array.from(uniqueCircuitNames));
        setCircuitURLs(circuitURLsArr);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCircuitCountByCountry();
  }, [region]);

  return { circuitCount, circuitNames, circuitURLs };
};

export default useCircuitCount;
