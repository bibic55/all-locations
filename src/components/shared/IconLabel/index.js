import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const IconLabel = ({ icon, className, label, isEllipsis = false }) => (
  <div className={classNames('iconLabel', className)}>
    <div className="iconLabel__icon">{icon}</div>
    <div className={classNames({ 'iconLabel__text--ellipsis': isEllipsis })}>{label}</div>
  </div>
);

IconLabel.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  isEllipsis: PropTypes.bool,
};

export default IconLabel;
