import * as types from '../constants/actionTypes';

// const initialState = {
//   display: 'none'
// };

const initialState = 'block';

const signUpReducer = (state=initialState, action) => {
//   let login;
  switch(action.type) {

    case types.SHOW_SIGNUP:
      console.log('ACTION PAYLOAD', action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default signUpReducer;