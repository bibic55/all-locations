import React from 'react';
import { useQuery } from 'react-query';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { fetchAllLocations } from '../../api';
import AllLocationsOverview from '../../components/features/AllLocations/AllLocationsOverview';
import ErrorPage from '../../components/pages/ErrorPage';
import LoadingPage from '../../components/pages/LoadingPage';
import ViewsProvider from '../../contextProviders/ViewsProvider';
import LocationModal from './LocationModal';

const AllLocation = () => {
  const { isLoading, isError, data } = useQuery('allLocations', fetchAllLocations);
  const { path } = useRouteMatch();

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <ViewsProvider>
      <Switch>
        <Route path={`${path}/:locationId`}>
          <LocationModal locations={data} />
        </Route>
      </Switch>
      <AllLocationsOverview locations={data} />
    </ViewsProvider>
  );
};

export default AllLocation;
