import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

if (process.env.NODE_ENV !== 'test') {
  ReactModal.setAppElement('#root');
}

const Modal = (props) => {
  const { modalOverlayClass = '', className } = props;

  return (
    <ReactModal
      {...props}
      className={classNames('react-modal', className)}
      overlayClassName={`react-modal-overlay ${modalOverlayClass}`}
    />
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  modalOverlayClass: PropTypes.string,
};

export default Modal;
