// React imports
import React from 'react';
// Redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/index.js';

/**
 * The App class acts as the main container to store what the user will view as the
 * web application.
 * @module App
 */
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="center-block fill">
        Hello
      </div>
    );
  }
}

/**
 * Passes data to the store to the container. Makes the result of reducers available
 * as props
 * @param  {Object} state - the state from the reducers
 * @return {Object}       - the object that contains the state as prop names
 */
const mapStateToProps = (state) => {
  return {
    // property: state.stateProp.valueName
  };
};

/**
 * Passes data from container to the store. Provides ability for the container to 
 * dispatch actions to change the state in the store. Adds these action creators as
 * props
 * @param  {Function} dispatch - function that a sends an action to the redux state
 * @return {Object}            - the object that contains the functions to dispatch actions
 */
const mapDispatchToProps = (dispatch) => {
  return {
    // To uncomment once actions actually exist
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);