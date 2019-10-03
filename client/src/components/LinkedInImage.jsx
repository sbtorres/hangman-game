import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const LinkedInImage = ({ incorrectGuesses }) => {
  const zIndex1 = incorrectGuesses.length >= 1 ? 1 : 3;
  const zIndex2 = incorrectGuesses.length >= 2 ? 1 : 3;
  const zIndex3 = incorrectGuesses.length >= 3 ? 1 : 3;
  const zIndex4 = incorrectGuesses.length >= 4 ? 1 : 3;
  const zIndex5 = incorrectGuesses.length >= 5 ? 1 : 3;
  const zIndex6 = incorrectGuesses.length >= 6 ? 1 : 3;

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      alignContent="center"
      style={{ position: 'relative', height: '300px', width: '300px' }}
    >
      <img
        src="images/linkedin.png"
        alt="linkedin"
        style={{
          height: '300px',
          width: '300px',
          position: 'absolute',
          zIndex: 2
        }}
      />
      <div style={{ display: 'flex' }}>
        <Grid
          style={{
            height: '150px',
            width: '100px',
            position: 'relative',
            backgroundColor: 'white',
            zIndex: zIndex1
          }}
        />
        <Grid
          style={{
            height: '150px',
            width: '100px',
            position: 'relative',
            backgroundColor: 'white',
            zIndex: zIndex2
          }}
        />
        <Grid
          style={{
            height: '150px',
            width: '100px',
            position: 'relative',
            backgroundColor: 'white',
            zIndex: zIndex3
          }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <Grid
          style={{
            height: '150px',
            width: '100px',
            position: 'relative',
            backgroundColor: 'white',
            zIndex: zIndex4
          }}
        />
        <Grid
          style={{
            height: '150px',
            width: '100px',
            position: 'relative',
            backgroundColor: 'white',
            zIndex: zIndex5
          }}
        />
        <Grid
          style={{
            height: '150px',
            width: '100px',
            position: 'relative',
            backgroundColor: 'white',
            zIndex: zIndex6
          }}
        />
      </div>
    </Grid>
  );
};

LinkedInImage.propTypes = {
  incorrectGuesses: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default LinkedInImage;
