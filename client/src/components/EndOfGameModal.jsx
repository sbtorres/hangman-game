import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center'
  }
}));

const EndOfGameModal = ({
  showEndOfGameModal,
  handleGameRestart,
  isWinner,
  secretWord
}) => {
  const classes = useStyles();

  const handleClose = () => {
    handleGameRestart();
  };

  return (
    <Modal
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={showEndOfGameModal}
      onClose={handleClose}
    >
      <div className={classes.paper}>
        <h2 id="simple-modal-title">{isWinner ? 'You win!' : 'You lost!'}</h2>
        <p id="simple-modal-description">
          {`The secret word was ${secretWord}`}
        </p>
        <Button variant="contained" onClick={handleClose}>
          Start a New Game!
        </Button>
      </div>
    </Modal>
  );
};

EndOfGameModal.propTypes = {
  showEndOfGameModal: PropTypes.bool.isRequired,
  handleGameRestart: PropTypes.func.isRequired,
  isWinner: PropTypes.bool.isRequired,
  secretWord: PropTypes.string.isRequired
};

export default EndOfGameModal;
