import * as types from '../constants/actionTypes';

// const initialState = {
//   display: 'none'
// };

const initialState = 'none';

const logoutButtonReducer = (state=initialState, action) => {

    switch(action.type) {

    case types.SHOW_LOGOUT_BUTTON:
      console.log('ACTION PAYLOAD', action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default logoutButtonReducer;