import React from "react";
import {render} from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


import {Home} from "./components/Home";
import {Registration} from "./components/Registration";

class App extends React.Component{
    render(){
      return (
       <MuiThemeProvider>
         <Home/>
       </MuiThemeProvider>
     );
   }
}

render(<App />, window.document.getElementById('app'));
