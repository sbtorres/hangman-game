const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const PORT = 3000;
const app = express();
let secretWord = '';

app.use(express.static('client/public'));
app.use(morgan('tiny'));

app.get('/getInitialString', (req, res) => {
  const randomInt = Math.floor(Math.random() * 162414);
  axios
    .get(`http://app.linkedin-reach.io/words?start=${randomInt}&count=1`)
    .then(({ data }) => {
      const charactersArray = new Array(data.length);
      secretWord = data;
      charactersArray.fill('_');
      res.status(200).send({ charactersArray, data });
    })
    .catch(err => {
      res.status(500).send({ Error: err });
    });
});

app.get('/checkGuess/:letter', (req, res) => {
  const guessedLetter = req.params.letter;
  console.log(secretWord);
  res.status(200).send({ guessedLetter });
});

app.listen(PORT, () => console.log(`Express server listening on PORT ${PORT}`));
