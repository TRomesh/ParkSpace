import React from 'react';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router';
import NavigationBar from './navigation/navigationBar';
import Messagelistdrop from './navigation/messagelistdrop';
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
import userAccountContainer from './UserAccount/UserAccountContainer';

let hasToken = () =>{
  const token = localStorage.getItem('token');
  return (token == undefined);
}


let requireAuth = (nextState, replace) =>{

  if (hasToken()){
    replace({
       pathname: '/',
       state: { nextPathname: nextState.location.pathname }
     });
  }
}

export default (
  <Route path="/" component={NavigationBar}>
    <IndexRoute component={LoginContainer} />
    <Route path="home" component={homeContainer} onEnter={requireAuth}/>
    <Route path="signup" component={SignupForm}>
      <Route path="signup/parkowner" component={SignupForm}/>
    </Route>
    <Route path="about" component={About} />
    <Route path="myaccount" component={userAccountContainer} onEnter={requireAuth} />
    <Route path="map" component={mapContainer} onEnter={requireAuth} />
    <Route path="newsfeeds" component={newsFeedContainer} onEnter={requireAuth} />
    <Route path="chat" component={chatContainer} onEnter={requireAuth} />
    <Route path="msglist" component={Messagelistdrop} onEnter={requireAuth} />
    <Route path="*" component={Error404}/>
  </Route>
);
