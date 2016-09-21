import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/login.js';

export default (
     <Route path="/" component={Home}>
       <IndexRoute component={Registration}/>
        <Route path="login" component={Login}/>
     </Route>
);
