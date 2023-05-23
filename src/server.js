import fetch from 'node-fetch';
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const apiUrl =
    'https://api.sportradar.com/formula1/trial/v2/en/seasons.json?api_key=46vnc2pz5czwqwktnege5h4s';

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('An error occurred');
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
