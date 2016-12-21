import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {lightGreenA700,lightGreenA400,green500,limeA400,orange500,deepOrange500,purpleA400,pinkA400,
red500,cyan500,cyan700,grey400} from 'material-ui/styles/colors';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppRouter from './components/AppRouter';

injectTapEventPlugin();

const customTheme = {
  palette: {
    primary1Color: lightGreenA700,
    primary2Color: lightGreenA400,
    primary3Color: limeA400
  }
};

const theme = getMuiTheme(customTheme);


render(
  <MuiThemeProvider muiTheme={theme}>
   <AppContainer>
    <Router history={browserHistory} routes={AppRouter} />
   </AppContainer>
  </MuiThemeProvider>
 ,document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./components/AppRouter', () => {
    const NextApp = require('./components/AppRouter').default;
    render(
      <MuiThemeProvider muiTheme={theme}>
       <AppContainer>
        <NextApp />
       </AppContainer>
      </MuiThemeProvider>,
      document.getElementById('app')
    );
  });
}
