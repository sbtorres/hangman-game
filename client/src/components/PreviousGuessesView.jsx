import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';

const PreviousGuessesView = ({ incorrectGuesses }) => {
  return (
    <Paper>
      <Typography variant="h5">
        Guesses Remaining:
        {` ${6 - incorrectGuesses.length}`}
      </Typography>
      <Typography variant="h5">
        Incorrect Guesses:
        {` ${incorrectGuesses.join(', ')}`}
      </Typography>
    </Paper>
  );
};

PreviousGuessesView.propTypes = {
  incorrectGuesses: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PreviousGuessesView;
