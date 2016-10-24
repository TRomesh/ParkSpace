import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App1 from './components/App';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <App1/>
  </MuiThemeProvider>
);

render(<App/>,document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(
      <AppContainer>
        <NextApp/>
      </AppContainer>
      ,
      document.getElementById('app')
    );
  });
}
