/********************************* ACTION TYPES ********************************/

export const TEST_ACTION = 'TEST_ACTION';

/******************************* OTHER CONSTANTS *******************************/

export const TestConstants = {
  MY_VALUE: 'hello darkness my old friend',
  NEW_VALUE: 'i wanna be the very best'
};

/******************************* ACTION CREATORS *******************************/

export const testAction = (value) => ({ type: TEST_ACTION, data: value });