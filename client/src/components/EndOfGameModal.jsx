import React from 'react';
import { Modal } from '@material-ui/core';

const EndOfGameModal = ({ showEndOfGameModal }) => {
  const showHideClassname = showEndOfGameModal
    ? 'modal display-block'
    : 'modal display-none';

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
      <div>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </div>
    </Modal>
  );
};

export default EndOfGameModal;
