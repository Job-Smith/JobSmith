import * as types from '../constants/actionTypes';

// const initialState = {
//   display: 'none'
// };

const initialState = 'block';

const showLoginButtonReducer = (state=initialState, action) => {

    switch(action.type) {

    case types.SHOW_LOGIN_BUTTON:
      console.log('ACTION PAYLOAD', action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default showLoginButtonReducer;