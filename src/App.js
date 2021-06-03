import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.less';
import IdentityContextProvider from './contexts/IdentityContext';
import HomePage from './pages/HomePage';

const App = () => (
  <IdentityContextProvider>
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
  </IdentityContextProvider>
);

export default App;