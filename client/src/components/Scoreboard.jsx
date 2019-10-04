import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';

const useScoreboardStyles = makeStyles({
  appbar: {
    marginBottom: '10px'
  }
});

const Scoreboard = () => {
  const classes = useScoreboardStyles();
  return (
    <AppBar position="static" className={classes.appbar}>
      <Typography variant="h6">Scoreboard</Typography>
    </AppBar>
  );
};

export default Scoreboard;
