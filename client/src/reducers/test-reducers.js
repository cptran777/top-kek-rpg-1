import { TestConstants,
         TEST_ACTION } from '../actions';

const initialState = {
  myValue: TestConstants.MY_VALUE,
  otherValues: []
};

const testApp = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return Object.assign({}, state, {
        myValue: TestConstants.NEW_VALUE
      });
    
    default:
      return state;
  }
};

export default testApp;