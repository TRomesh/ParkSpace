import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>
);

render(<App/>,document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(
      <AppContainer>
      <MuiThemeProvider>
        <NextApp/>
      </MuiThemeProvider>
      </AppContainer>
      ,
      document.getElementById('app')
    );
  });
}
