import React from 'react';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router';
import NavigationBar from './navigation/navigationBar.react';
import greetings from './Login/greetings';
import LoginContainer from './Login/loginContainer';
import About from './About/AboutPage.react';
import SignupForm from './Singup/signupForm';
import mapContainer from './Parkmap/mapContainer';

export default (
  <Route path="/" component={NavigationBar}>
    <IndexRoute component={LoginContainer} />
    <Route path="home" component={greetings} />
    <Route path="signup" component={SignupForm} />
    <Route path="about" component={About} />
    <Route path="map" component={mapContainer}/>
  </Route>
);
