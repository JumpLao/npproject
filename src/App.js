import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.less';
import './styles/landing1.less'
import './styles/landing2.less'

import IdentityContextProvider from './contexts/IdentityContext';
import HomePage from './pages/HomePage';
import LandingPage1 from './pages/landing1/Layout';
import QuestionairPage from './pages/QuestionairPage';

const App = () => (
  <IdentityContextProvider>
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/landing1">
          <LandingPage1 />
        </Route>
        <Route path="/questionair">
          <QuestionairPage />
        </Route>
        <Route path="" exact>
          <Redirect to="/home" />
        </Route>
        <Route>
          <Redirect to="/landing1/notFound" />
        </Route>
      </Switch>
    </Router>
  </IdentityContextProvider>
);

export default App;