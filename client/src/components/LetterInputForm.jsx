import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, Button } from '@material-ui/core';

const LetterInputForm = ({ handleUserGuess }) => {
  const [letterInput, setLetterInput] = useState('');

  const handleChange = e => {
    setLetterInput(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleUserGuess(letterInput);
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <form onSubmit={handleSubmit}>
        <TextField
          id="letter-input"
          label="Guess A Letter:"
          value={letterInput.name}
          onChange={handleChange}
          onBlur={handleChange}
          inputProps={{ maxLength: 1 }}
        />
        <Button variant="contained" size="medium" type="submit">
          Make A Guess!
        </Button>
      </form>
    </Grid>
  );
};

LetterInputForm.propTypes = {
  handleUserGuess: PropTypes.func.isRequired
};

export default LetterInputForm;
