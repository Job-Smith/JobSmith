import * as types from '../constants/actionTypes';

// const initialState = {
//   display: 'none'
// };

const initialState = 'block';

// TESTING ONLY to hide sign in page
// const initialState = 'none';

const loginReducer = (state=initialState, action) => {
//   let login;
  switch(action.type) {

    case types.SHOW_LOGIN:
      console.log('ACTION PAYLOAD', action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default loginReducer;