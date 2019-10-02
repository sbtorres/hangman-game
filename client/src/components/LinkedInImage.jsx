import React from 'react';
import { Grid } from '@material-ui/core';

const LinkedInImage = () => {
  return (
    <Grid container justify="center" alignItems="center" alignContent="center">
      <img
        src="images/linkedin.png"
        alt="linkedin"
        style={{ height: '300px', width: '300px' }}
      />
    </Grid>
  );
};

export default LinkedInImage;
