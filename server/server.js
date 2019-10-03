const express = require('express');
const morgan = require('morgan');
const {
  getInitialString,
  checkGuess
} = require('./controllers/words.controller');

const PORT = 3000;
const app = express();

app.use(express.static('client/public'));
app.use(morgan('tiny'));

app.get('/words/getInitialString', (req, res) => {
  getInitialString(req, res);
});

app.get('/words/checkGuess/:guessedLetter', (req, res) => {
  checkGuess(req, res);
});

app.listen(PORT, () => console.log(`Express server listening on PORT ${PORT}`));
