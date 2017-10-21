// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, 
         Route, 
         Link } from 'react-router-dom';
// Redux imports
import { Provider } from 'react-redux';
import configureStore from './store/configStore';

// Component imports
import App from './containers/App';

// Creates the redux store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);