import React from "react";
import {render} from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import {Home} from "./components/Home";

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
