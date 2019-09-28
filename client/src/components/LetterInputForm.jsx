import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const LetterInputForm = props => {
  const [letterInput, setLetterInput] = useState('');

  const handleChange = e => {
    setLetterInput(e.target.value);
  };

  return (
    <form>
      <TextField
        id="letter-input"
        label="Guess A Letter:"
        value={letterInput.name}
        onChange={handleChange}
        onBlur={handleChange}
      />
    </form>
  );
};

export default LetterInputForm;
