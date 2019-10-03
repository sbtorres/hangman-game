import React from 'react';
import { Grid } from '@material-ui/core';

const LinkedInImage = () => {
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
            zIndex: 3
          }}
        />
        <Grid
          style={{
            height: '150px',
            width: '100px',
            position: 'relative',
            backgroundColor: 'white',
            zIndex: 3
          }}
        />
        <Grid
          style={{
            height: '150px',
            width: '100px',
            position: 'relative',
            backgroundColor: 'white',
            zIndex: 3
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
            zIndex: 3
          }}
        />
        <Grid
          style={{
            height: '150px',
            width: '100px',
            position: 'relative',
            backgroundColor: 'white',
            zIndex: 3
          }}
        />
        <Grid
          style={{
            height: '150px',
            width: '100px',
            position: 'relative',
            backgroundColor: 'white',
            zIndex: 3
          }}
        />
      </div>
    </Grid>
  );
};

export default LinkedInImage;
