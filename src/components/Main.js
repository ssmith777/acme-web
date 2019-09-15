import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage.js';
import About from './About.js';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={About} />
    </Switch>
  );
};

export default Main;
