import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AllLocation from '../AllLocations';

import './index.scss';

const App = () => (
  <div className="app">
    <Router>
      <Switch>
        <Redirect exact from="/" to="/locations" />

        <Route path="/locations">
          <AllLocation />
        </Route>

        <Route>
          {/* TODO make 404 component */}
          <div>not found</div>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
