import React from 'react';

const AllLocationsOverview = ({ locations = [] }) =>
  locations.map(({ name, id }) => <div key={id}>{name}</div>);

export default AllLocationsOverview;
