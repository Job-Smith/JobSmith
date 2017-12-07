// this reducer here for testing

import * as types from '../constants/actionTypes';

const initialState = 'block';

const obfuscateMainReducer = (state=initialState, action) => {
  switch(action.type) {

    case types.OBFUSCATE_MAIN:
      console.log('ACTION PAYLOAD', action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default obfuscateMainReducer;