import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Card = ({ children, className, onClick }) => (
  <div
    role="button"
    tabIndex={0}
    className={classNames('card', className)}
    onClick={onClick}
    onKeyPress={onClick}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
