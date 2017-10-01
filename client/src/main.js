// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, 
         Route, 
         IndexRoute, 
         browserHistory } from 'react-router';
// Redux imports
import { Provider } from 'react-redux';
import configureStore from './store/configStore';

// Component imports
import App from './containers/App';

// Creates the redux store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={App} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);