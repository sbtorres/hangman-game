import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';

const useScoreboardStyles = makeStyles({
  appbar: {
    marginBottom: '10px'
  }
});

const Scoreboard = ({ playerWins, computerWins }) => {
  const classes = useScoreboardStyles();
  return (
    <AppBar position="static" className={classes.appbar}>
      <Typography variant="h6">Scoreboard</Typography>
    </AppBar>
  );
};

Scoreboard.propTypes = {
  playerWins: PropTypes.number.isRequired,
  computerWins: PropTypes.number.isRequired
};
export default Scoreboard;
