import React from 'react';
import PropTypes from 'prop-types';
import { SnackbarContent, IconButton } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';

const GuessFeedbackSnackbarContentWrapper = ({ message, onClose, variant }) => {
  const variantIcon = {
    correct: CheckCircleIcon,
    incorrect: ErrorIcon
  };
  const useStyles = makeStyles(theme => ({
    correct: {
      backgroundColor: green[600]
    },
    incorrect: {
      backgroundColor: theme.palette.error.dark
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  }));

  const classes = useStyles();
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
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
          <CloseIcon />
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
