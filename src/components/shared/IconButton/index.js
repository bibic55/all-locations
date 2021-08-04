import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const IconButton = ({ icon, onClick, className }) => (
  <button
    className={classNames('button', className)}
    type="button"
    onClick={onClick}
    onKeyPress={onClick}
    tabIndex={0}
  >
    {icon}
  </button>
);

IconButton.propTypes = {
  icon: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.func,
};

export default IconButton;
