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

export const showSignUp = (signup) => ({
  type: types.SHOW_SIGNUP,
  payload: signup,
});

// add more action creators
export const replaceQuestions = (questions) => ({
  type: types.REPLACE_QUESTIONS,
  payload: questions,
});

