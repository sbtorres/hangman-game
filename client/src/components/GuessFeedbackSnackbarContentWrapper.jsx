import React from 'react';
import PropTypes from 'prop-types';
import { SnackbarContent, IconButton } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';

const GuessFeedbackSnackbarContentWrapper = ({ message, onClose, variant }) => {
  const variantIcon = {
    success: CheckCircleIcon,
    incorrect: ErrorIcon
  };
  const useStyles1 = makeStyles(theme => ({
    success: {
      backgroundColor: green[600]
    },
    incorrect: {
      backgroundColor: theme.palette.error.dark
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  }));

  const classes = useStyles1();
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classes[variant]}
      message={
        <span className={classes.message}>
          <Icon className={classes.icon} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
    />
  );
};

GuessFeedbackSnackbarContentWrapper.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired
};

export default GuessFeedbackSnackbarContentWrapper;
