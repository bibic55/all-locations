import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import AllLocation from '../AllLocations';
import NotFound from '../../components/shared/NotFound';

import './index.scss';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Router>
          <Switch>
            <Redirect exact from="/" to="/locations" />

            <Route path="/locations">
              <AllLocation />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </QueryClientProvider>
  );
};

export default App;
