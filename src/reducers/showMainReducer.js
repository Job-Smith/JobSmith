// this reducer here for testing

import * as types from '../constants/actionTypes';

const initialState = 'none';

const showMainReducer = (state=initialState, action) => {
  switch(action.type) {

    case types.SHOW_MAIN:
      return action.payload;

    default:
      return state;
  }
};

export default showMainReducer;