import React from 'react';
import PropTypes from 'prop-types';
import AllLocationsHeader from './AllLocationsHeader';
import LocationCard from './LocationCard';

import './index.scss';

const AllLocationsOverview = ({ locations = [] }) => (
  <div className="allLocations">
    <AllLocationsHeader />

    <div className="allLocations__cards">
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  </div>
);

AllLocationsOverview.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object),
};

export default AllLocationsOverview;
