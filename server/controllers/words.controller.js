const axios = require('axios');

let secretWord = 'test';
let charactersArray = ['_', '_', '_', '_'];
let incorrectGuesses = [];

const getInitialString = (req, res) => {
  const randomInt = Math.floor(Math.random() * 162414);
  axios
    .get(`http://app.linkedin-reach.io/words?start=${randomInt}&count=1`)
    .then(({ data }) => {
      charactersArray = new Array(data.length);
      incorrectGuesses = [];
      secretWord = data;
      charactersArray.fill('_');
      res.status(200).send({ charactersArray });
    })
    .catch(err => {
      res.status(500).send({ Error: err });
    });
};

const checkGuess = (req, res) => {
  const { guessedLetter } = req.params;
  let correctGuess = false;
  let hasWon = true;

  for (let idx = 0; idx < secretWord.length; idx += 1) {
    if (guessedLetter === secretWord[idx]) {
      charactersArray[idx] = guessedLetter;
      correctGuess = true;
    }
    if (charactersArray[idx] === '_') {
      hasWon = false;
    }
  }

  if (!correctGuess) {
    incorrectGuesses.push(guessedLetter.toUpperCase());
  }

  if (incorrectGuesses.length === 6) {
    res.status(200).send({
      charactersArray,
      incorrectGuesses,
      correctGuess,
      hasWon,
      secretWord
    });
  } else if (hasWon) {
    res.status(200).send({
      charactersArray,
      incorrectGuesses,
      correctGuess,
      hasWon,
      secretWord
    });
  } else {
    res.status(200).send({
      charactersArray,
      incorrectGuesses,
      correctGuess,
      hasWon
    });
  }
};

module.exports = { getInitialString, checkGuess };
