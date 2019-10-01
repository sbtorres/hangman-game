import React, { useState } from 'react';
import { Snackbar } from '@material-ui/core';
import GuessFeedbackSnackbarContentWrapper from './GuessFeedbackSnackbarContentWrapper';

const GuessFeedbackSnackbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={20000}
      open={isOpen}
      onClose={onClose}
    >
      <GuessFeedbackSnackbarContentWrapper
        message="Test!"
        onClose={onClose}
        variant="incorrect"
      />
    </Snackbar>
  );
};

export default GuessFeedbackSnackbar;
