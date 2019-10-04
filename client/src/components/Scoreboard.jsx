import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, AppBar, Typography } from '@material-ui/core';

const useScoreboardStyles = makeStyles({
  appbar: {
    marginBottom: '10px',
    flexDirection: 'row'
  },
  scoreContainer: {
    justifyContent: 'flex-end'
  },
  playerWins: {
    marginRight: '60px'
  },
  computerWins: {
    marginRight: '60px'
  }
});

const Scoreboard = ({ playerWins, computerWins }) => {
  const classes = useScoreboardStyles();
  return (
    <AppBar position="static" className={classes.appbar}>
      <Typography variant="h5">Scoreboard</Typography>
      <Grid container className={classes.scoreContainer}>
        <Typography variant="h6" className={classes.playerWins}>
          Player Wins: {playerWins}
        </Typography>
        <Typography variant="h6" className={classes.computerWins}>
          Computer Wins: {computerWins}
        </Typography>
      </Grid>
    </AppBar>
  );
};

Scoreboard.propTypes = {
  playerWins: PropTypes.number.isRequired,
  computerWins: PropTypes.number.isRequired
};
export default Scoreboard;
