import React from 'react';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router';
import App1 from './App';
import NavigationBar from './navigation/navigationBar.react';
import greetings from './Login/greetings';
import About from './About/AboutPage.react';


// class AppRouter extends React.Component {
//
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <Router history={browserHistory}>
//         <Route path='/' component={NavigationBar}>
//         <Route path='user' component={NavigationBar} />
//         </Route>
//       </Router>
//     );
//   }
// }
//
// export default AppRouter;

export default (
  <Route path="/" component={NavigationBar}>
    <IndexRoute component={greetings} />
    <Route path="home" component={greetings} />
    <Route path="about" component={About} />
  </Route>
);
