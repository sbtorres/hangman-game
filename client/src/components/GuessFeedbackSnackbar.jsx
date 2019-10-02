import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import GuessFeedbackSnackbarContentWrapper from './GuessFeedbackSnackbarContentWrapper';

const GuessFeedbackSnackbar = ({ isOpen, lastGuess, handleSnackbarClose }) => {
  const onClose = () => {
    handleSnackbarClose();
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={1000}
      open={isOpen}
      onClose={onClose}
    >
      <GuessFeedbackSnackbarContentWrapper
        message={lastGuess}
        onClose={onClose}
        variant={lastGuess}
      />
    </Snackbar>
  );
};

GuessFeedbackSnackbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  lastGuess: PropTypes.string.isRequired,
  handleSnackbarClose: PropTypes.func.isRequired
};

export default GuessFeedbackSnackbar;
