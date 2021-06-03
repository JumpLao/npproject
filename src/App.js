import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.less';
import HomePage from './pages/HomePage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route>
        <Redirect to="/home" />
      </Route>
    </Switch>
  </Router>
);

export default App;