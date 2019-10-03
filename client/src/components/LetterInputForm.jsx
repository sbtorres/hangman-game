import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, Button } from '@material-ui/core';

const LetterInputForm = ({ handleUserGuess, incorrectGuesses }) => {
  const [letterInput, setLetterInput] = useState('');
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const inputEl = useRef(null);

  const handleChange = e => {
    const letter = e.target.value.toLowerCase();
    if (incorrectGuesses.includes(letter.toUpperCase())) {
      setIsInvalidInput(true);
    } else {
      setIsInvalidInput(false);
      setLetterInput(letter);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!isInvalidInput) {
      handleUserGuess(letterInput);
      setLetterInput('');
      inputEl.current.focus();
    }
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
          variant="outlined"
          margin="dense"
          autoFocus
          error={isInvalidInput}
          helperText={
            isInvalidInput ? 'You have already guessed that letter!' : ' '
          }
        />
        <Button
          variant="contained"
          size="medium"
          type="submit"
          style={{ margin: 8 }}
        >
          Make A Guess!
        </Button>
      </form>
    </Grid>
  );
};

LetterInputForm.propTypes = {
  handleUserGuess: PropTypes.func.isRequired,
  incorrectGuesses: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default LetterInputForm;
