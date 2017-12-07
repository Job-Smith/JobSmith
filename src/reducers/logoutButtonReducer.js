import * as types from '../constants/actionTypes';

const initialState = 'none';

const logoutButtonReducer = (state=initialState, action) => {

    switch(action.type) {

    case types.SHOW_LOGOUT_BUTTON:
      return action.payload;

    default:
      return state;
  }
};

export default logoutButtonReducer;