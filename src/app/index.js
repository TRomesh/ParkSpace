import React from "react";
import {render} from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Rroutes from './routes.js';
import Home from './components/Home';
import Login from './components/login.js';
import Registration from './components/Registration';

injectTapEventPlugin();


class App extends React.Component{
    render(){
      return (
       <MuiThemeProvider>
        <Router history={browserHistory} routes={Rroutes}/>
       </MuiThemeProvider>
     );
   }
}

render(<App />, window.document.getElementById('app'));
