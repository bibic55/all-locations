import React from 'react';
import { useQuery } from 'react-query';
import { fetchAllLocations } from '../../api';
import AllLocationsOverview from '../../components/features/AllLocations/AllLocationsOverview';
import ErrorPage from '../../components/shared/ErrorPage';
import LoadingPage from '../../components/shared/LoadingPage';

const AllLocation = () => {
  const { isLoading, isError, data } = useQuery('allLocations', fetchAllLocations);

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <AllLocationsOverview locations={data} />;
};

export default AllLocation;
