import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const LetterInputForm = props => {
  const [letterInput, setLetterInput] = useState('');
  return (
    <form>
      <TextField
        id="letter-input"
        label="Guess A Letter:"
        value={letterInput.name}
      />
    </form>
  );
};

export default LetterInputForm;
