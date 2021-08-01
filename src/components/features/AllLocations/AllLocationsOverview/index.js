import React from 'react';
import PropTypes from 'prop-types';
import AllLocationsHeader from './AllLocationsHeader';

import './index.scss';
import AllLocationsCard from './AllLocationsCard';

const AllLocationsOverview = ({ locations = [] }) => (
  <div className="allLocations">
    <AllLocationsHeader />

    <div className="allLocations__cards">
      {locations.map((location) => (
        <AllLocationsCard key={location.id} location={location} />
      ))}
    </div>
  </div>
);

AllLocationsOverview.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object),
};

export default AllLocationsOverview;
