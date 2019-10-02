import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const EndOfGameModal = ({ showEndOfGameModal }) => {
  const classes = useStyles();

  const handleClose = () => {
    console.log('close!');
  };

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={showEndOfGameModal}
      onClose={handleClose}
    >
      <div className={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </div>
    </Modal>
  );
};

EndOfGameModal.propTypes = {
  showEndOfGameModal: PropTypes.bool.isRequired
};

export default EndOfGameModal;
