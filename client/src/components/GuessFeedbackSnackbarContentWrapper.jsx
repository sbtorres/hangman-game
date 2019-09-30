import React from 'react';
import PropTypes from 'prop-types';
import { SnackbarContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const GuessFeedbackSnackbarContentWrapper = ({ message, onClose }) => {
  return (
    <SnackbarContent
      message={<span>{message}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};

GuessFeedbackSnackbarContentWrapper.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default GuessFeedbackSnackbarContentWrapper;
