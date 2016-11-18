import React from 'react';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router';
import NavigationBar from './navigation/navigationBar.react';
import greetings from './Login/greetings';
import About from './About/AboutPage.react';

export default (
  <Route path="/" component={NavigationBar}>
    <IndexRoute component={greetings} />
    <Route path="home" component={greetings} />
    <Route path="about" component={About} />
  </Route>
);
