import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

const SecretWord = ({ visibleLetters }) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ margin: 20 }}
    >
      {visibleLetters.map((char, index) => {
        return (
          <Typography variant="h3" key={index} style={{ padding: 5 }}>
            {char}
          </Typography>
        );
      })}
    </Grid>
  );
};

SecretWord.propTypes = {
  visibleLetters: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SecretWord;
