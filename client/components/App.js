import React from 'react';
import Home from './Home';
import About from './About/AboutPage.react';
import NavigationBar from './navigation/navigationBar.react';


class App extends React.Component{
   render(){
     return(
       <div>
        <NavigationBar/>
       <h1>Hello Tharaka</h1>
         <Home/>
         <About/>
       </div>
     );
   }
}

export default App;
