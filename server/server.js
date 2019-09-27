const express = require('express');
const axios = require('axios');

const PORT = 3000;
const app = express();

app.use(express.static('client/public'));

app.get('/getNewWord', (req, res) => {
  const randomInt = Math.floor(Math.random() * 162414);
  axios
    .get(`http://app.linkedin-reach.io/words?start=${randomInt}&count=1`)
    .then(({ data }) => {
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(PORT, () => console.log(`Express server listening on PORT ${PORT}`));
