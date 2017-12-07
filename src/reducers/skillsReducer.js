import * as types from '../constants/actionTypes';

const initialState = [];

const skillsReducer = (state=initialState, action) => {
  let skills;

  switch(action.type) {

    case types.UPDATE_SKILLS:
      return action.payload;
    
    default:
      return state;
  }
};

export default skillsReducer;