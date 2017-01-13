import React from 'react';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router';
import NavigationBar from './navigation/navigationBar.react';
import greetings from './Login/greetings';
import LoginContainer from './Login/loginContainer';
import About from './About/AboutPage.react';
import SignupForm from './Singup/signupForm';
import parkSignupForm from './Singup/parkSignupForm';
import mapContainer from './Parkmap/mapContainer';
import newsFeedContainer from './Newsfeeds/newsFeedContainer';
import Error404 from './Notifications/Error404';
import chatContainer from './chat/chatContainer';
import homeContainer from './Home/homeContainer';


let requireAuth = (nextState, replac) =>{
  const token = localStorage.getItem('token');
  if (!token){

  }
}

export default (
  <Route path="/" component={NavigationBar}>
    <IndexRoute component={LoginContainer} />
    <Route path="home" component={homeContainer} />
    <Route path="signup" component={SignupForm}>
      <Route path="signup/parkowner" component={SignupForm}/>
    </Route>
    <Route path="about" component={About} />
    <Route path="map" component={mapContainer}/>
    <Route path="newsfeeds" component={newsFeedContainer}/>
    <Route path="chat" component={chatContainer}/>
    <Route path="*" component={Error404}/>
  </Route>
);
