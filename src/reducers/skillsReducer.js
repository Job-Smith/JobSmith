import * as types from '../constants/actionTypes';

const initialState = [];

const skillsReducer = (state=initialState, action) => {
  let skills;

  switch(action.type) {

    case types.UPDATE_SKILLS:
      skills = state.slice();
      skills = skills.concat(action.payload);
      return skills;
    
    default:
      return state;
  }
};

export default skillsReducer;