// import actionType constants
import * as types from '../constants/actionTypes'

export const updateSkills = (skills) => ({
  type: types.UPDATE_SKILLS,
  payload: skills,
});

export const replaceQuestions = (questions) => ({
  type: types.REPLACE_QUESTIONS,
  payload: questions,
});
