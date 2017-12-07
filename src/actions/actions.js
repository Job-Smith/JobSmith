import * as types from '../constants/actionTypes';
import * as views from '../constants/displayTypes.js';
import axios from 'axios';

// skills reducer
export const updateSkills = (skills) => ({
  type: types.UPDATE_SKILLS,
  payload: skills,
});

export const fetchSkills = () => {
  return (dispatch) => {
    axios.get('/skills')
      .then((response) => {
        dispatch(updateSkills(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// reducers for toggling show (display: block) and hide (display: none):
export const showLogin = (login) => ({
  type: types.SHOW_LOGIN,
  payload: login,
});

export const showSignUp = (signup) => ({
  type: types.SHOW_SIGNUP,
  payload: signup,
});

// export const showLoginButton = (loginButton) => ({
//   type: types.SHOW_LOGIN_BUTTON,
//   payload: loginButton,
// });

export const showLogoutButton = (logoutButton) => ({
  type: types.SHOW_LOGOUT_BUTTON,
  payload: logoutButton,
});

export const showMain = (main) => ({
  type: types.SHOW_MAIN,
  payload: main,
});

// add more action creators
// question reducer
export const replaceQuestions = (questions) => ({
  type: types.REPLACE_QUESTIONS,
  payload: questions,
});

export const expandAnswers = (questionId) => ({
  type: types.EXPAND_ANSWERS,
  payload: questionId,
});

export const addAnswer = (answerData) => ({
  type: types.ADD_ANSWER,
  payload: answerData,
});

export const fetchQuestions = (skillType) => {
  return (dispatch) => {
    axios.post('/getQuestions', { skill_id: skillType })
      .then((response) => {
        dispatch(replaceQuestions(response.data));
      })
      .catch(function (error) {
      });
  };
};

export const saveQuestion = (questionData) => {
  return (dispatch) => {
    axios.post('/saveQuestion', questionData)
      .then((response) => {
        dispatch(fetchQuestions(response.data.skill_id));
        dispatch(changeView(views.REGULAR_VIEW));
      })
      .catch(function (error) {
      });
  };
}

export const saveAnswer = (answerData) => {
console.log("saveAnswer answerData", answerData);
  return (dispatch) => {
    axios.post('/saveAnswer', answerData)
      .then((response) => {
console.log("saveAnswer response.data", response.data);
        dispatch(addAnswer(response.data));
      })
      .catch(function (error) {
        console.log('Save Question ERROR: ', error);
      });
  };
}

// user reducer
export const setUser = (userId) => ({
  type: types.SET_USER,
  payload: userId,
});

export const setSelectedQuestion = (questionId) => ({
  type: types.SET_QUESTION,
  payload: questionId,
});

export const displayOther = (displayType) => ({
  type: types.TOGGLE_SHOW_OTHER,
  payload: displayType,
});

// display reducer
export const changeView = (view) => ({
  type: types.CHANGE_VIEW,
  payload: view,
});
