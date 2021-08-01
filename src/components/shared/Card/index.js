import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Card = ({ children, className }) => (
  <div className={classNames('card', className)}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
};

export default Card;
