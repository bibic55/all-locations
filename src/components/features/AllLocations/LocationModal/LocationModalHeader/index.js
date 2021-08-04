import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../../../shared/IconButton';
import Close from '../../../../icons/Close';

import './index.scss';

const LocationModalHeader = ({ name, handleCloseClick }) => (
  <div className="locationModalHeader">
    <div className="locationModalHeader__title">{name}</div>
    <IconButton icon={<Close />} onClick={handleCloseClick} />
  </div>
);

LocationModalHeader.propTypes = {
  name: PropTypes.string,
  handleCloseClick: PropTypes.func,
};

export default LocationModalHeader;
