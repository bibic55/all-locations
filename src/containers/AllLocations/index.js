import React from 'react';
import { useQuery } from 'react-query';
import { fetchAllLocations } from '../../api';
import AllLocationsOverview from '../../components/features/AllLocations/AllLocationsOverview';

const AllLocation = () => {
  const { isLoading, isError, data } = useQuery('allLocations', fetchAllLocations);

  if (isError) {
    // TODO make error page
    return <div>Error page</div>;
  }

  if (isLoading) {
    // TODO make loading component
    return <div>Loading</div>;
  }

  return <AllLocationsOverview locations={data} />;
};

export default AllLocation;
