// import actionType constants
import * as types from '../constants/actionTypes'

export const updateSkills = (skills) => ({
  type: types.UPDATE_SKILLS,
  payload: skills,
});

export const showLogin = (login) => ({
  type: types.SHOW_LOGIN,
  payload: login,
});

// add more action creators