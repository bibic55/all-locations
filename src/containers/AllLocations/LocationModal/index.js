import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import LocationModalComponent from '../../../components/features/AllLocations/LocationModal';

const LocationModal = ({ locations }) => {
  const history = useHistory();

  if (!locations) {
    return null;
  }

  const { locationId } = useParams();
  const currentLocation = locations.find(({ id }) => id === locationId);

  if (!currentLocation) {
    return null;
  }

  const handleCloseClick = () => {
    history.push('/locations');
  };

  return <LocationModalComponent location={currentLocation} handleCloseClick={handleCloseClick} />;
};

LocationModal.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object),
};

export default LocationModal;
