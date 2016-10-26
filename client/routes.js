import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router'
import App1 from './components/App';
import NavigationBar from './components/navigation/navigationBar.react';
import greetings from './components/Login/greetings';


export default (
     <Route path="/" component={App1}>
       <IndexRoute component={greetings}/>
     </Route>
);
