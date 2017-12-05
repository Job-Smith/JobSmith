import * as types from '../constants/actionTypes';

const initialState = {
  active: false,
  choices: [ 'Chicken', 'Java', 'HTML', 'CSS' ]
};

const loginReducer = (state=initialState, action) => {
  let login;

  switch(action.type) {
    
    default:
      return state;
  }
};

export default loginReducer;