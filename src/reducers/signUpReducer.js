import * as types from '../constants/actionTypes';

const initialState = 'none';

const signUpReducer = (state=initialState, action) => {
  switch(action.type) {

    case types.SHOW_SIGNUP:
      return action.payload;

    default:
      return state;
  }
};

export default signUpReducer;