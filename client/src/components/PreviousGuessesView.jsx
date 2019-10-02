import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';

const PreviousGuessesView = ({ numOfIncorrectGuesses, incorrectGuesses }) => {
  return (
    <Paper>
      <Typography variant="h5">
        Guesses Remaining:
        {` ${6 - numOfIncorrectGuesses}`}
      </Typography>
      <Typography variant="h5">
        Incorrect Guesses:
        {` ${incorrectGuesses.join(', ')}`}
      </Typography>
    </Paper>
  );
};

PreviousGuessesView.propTypes = {
  numOfIncorrectGuesses: PropTypes.number.isRequired,
  incorrectGuesses: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PreviousGuessesView;
