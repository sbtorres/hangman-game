import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, Button } from '@material-ui/core';

const LetterInputForm = ({ handleUserGuess }) => {
  const [letterInput, setLetterInput] = useState('');
  const inputEl = useRef(null);

  const handleChange = e => {
    setLetterInput(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleUserGuess(letterInput);
    setLetterInput('');
    inputEl.current.focus();
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <form onSubmit={handleSubmit}>
        <TextField
          id="letter-input"
          label="Guess A Letter:"
          value={letterInput}
          onChange={handleChange}
          onBlur={handleChange}
          inputProps={{ maxLength: 1 }}
          inputRef={inputEl}
          autoFocus
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
