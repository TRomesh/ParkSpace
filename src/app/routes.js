import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/login.js';
import CoursesPage from './components/course';

export default (
     <Route path="/" component={Home}>
       <IndexRoute component={CoursesPage}/>
        <Route path="login" component={Login}/>
     </Route>
);
