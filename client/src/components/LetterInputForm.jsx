import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

const LetterInputForm = () => {
  const [letterInput, setLetterInput] = useState('');

  const handleChange = e => {
    setLetterInput(e.target.value);
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <form>
        <TextField
          id="letter-input"
          label="Guess A Letter:"
          value={letterInput.name}
          onChange={handleChange}
          onBlur={handleChange}
        />
        <Button variant="contained" size="medium">
          Make A Guess!
        </Button>
      </form>
    </Grid>
  );
};

export default LetterInputForm;
