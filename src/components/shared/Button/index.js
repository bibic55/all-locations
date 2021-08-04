import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Button = ({ onClick, className, label }) => (
  <button
    className={classNames('button', className)}
    type="button"
    onClick={onClick}
    onKeyPress={onClick}
    tabIndex={0}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.func,
};

export default Button;
