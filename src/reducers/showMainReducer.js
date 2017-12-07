// this reducer here for testing

import * as types from '../constants/actionTypes';

const initialState = 'none';

const showMainReducer = (state=initialState, action) => {
  switch(action.type) {

    case types.SHOW_MAIN:
      console.log('ACTION PAYLOAD', action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default showMainReducer;