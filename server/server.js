const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const PORT = 3000;
const app = express();
let secretWord = '';
let charactersArray = [];

app.use(express.static('client/public'));
app.use(morgan('tiny'));

app.get('/getInitialString', (req, res) => {
  const randomInt = Math.floor(Math.random() * 162414);
  axios
    .get(`http://app.linkedin-reach.io/words?start=${randomInt}&count=1`)
    .then(({ data }) => {
      charactersArray = new Array(data.length);
      secretWord = data;
      charactersArray.fill('_');
      res.status(200).send({ charactersArray, data });
    })
    .catch(err => {
      res.status(500).send({ Error: err });
    });
});

app.get('/checkGuess/:guessedLetter', (req, res) => {
  const { guessedLetter } = req.params;
  for (let idx = 0; idx < secretWord.length; idx += 1) {
    if (guessedLetter === secretWord[idx]) {
      charactersArray[idx] = guessedLetter;
    }
  }

  res.status(200).send({ charactersArray });
});

app.listen(PORT, () => console.log(`Express server listening on PORT ${PORT}`));
