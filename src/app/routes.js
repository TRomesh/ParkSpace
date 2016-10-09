import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Home from './components/Home';
import Registration from './components/Registration';
import CoursesPage from './components/course';

export default (
     <Route path="/" component={Home}>
       <IndexRoute component={Registration}/>
        <Route path="course" component={CoursesPage}/>
     </Route>
);
