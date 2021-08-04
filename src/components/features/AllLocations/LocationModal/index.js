import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../shared/Modal';
import LocationModalHeader from './LocationModalHeader';
import LocationModalContent from './LocationModalContent';

const LocationModal = ({ location, handleCloseClick }) => (
  <Modal isOpen>
    <LocationModalHeader name={location.name} handleCloseClick={handleCloseClick} />
    <LocationModalContent location={location} />
  </Modal>
);

LocationModal.propTypes = {
  location: PropTypes.shape({
    createdAt: PropTypes.string,
    description: PropTypes.string,
    userCount: PropTypes.number,
    numberOfViews: PropTypes.number,
    name: PropTypes.string,
  }),
  handleCloseClick: PropTypes.func,
};

export default LocationModal;
