// import actionType constants
import * as types from '../constants/actionTypes'

export const updateSkills = (skills) => ({
  type: types.UPDATE_SKILLS,
  payload: skills,
});

// add more action creators