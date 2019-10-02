import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    height: 70,
    width: 400,
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
    margin: 'auto'
  }
});

const PreviousGuessesView = ({ incorrectGuesses }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
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
