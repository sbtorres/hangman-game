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
      autoHideDuration={2000}
      open={isOpen}
      onClose={onClose}
    >
      <GuessFeedbackSnackbarContentWrapper message="Test!" onClose={onClose} />
    </Snackbar>
  );
};

export default GuessFeedbackSnackbar;
