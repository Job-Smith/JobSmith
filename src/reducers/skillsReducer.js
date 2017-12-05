import * as types from '../constants/actionTypes';

const initialState = {
  skills: [],
};

const skillsReducer = (state=initialState, action) => {
  let skills;

  switch(action.type) {

    case types.UPDATE_SKILLS:
      skills = state.skills.slice();
      skills = skills.concat(action.payload);

      return {
        ...state,
        skills,
      };
    
    default:
      return state;
  }
};

export default skillsReducer;