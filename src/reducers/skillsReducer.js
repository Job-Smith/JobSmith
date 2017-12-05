import * as types from '../constants/actionTypes';

const initialState = {
  skills: [ 'Javascript', 'Java', 'HTML', 'CSS' ]
};

const skillsReducer = (state=initialState, action) => {
  let skillList;

  switch(action.type) {
    
    default:
      return state;
  }
};

export default skillsReducer;