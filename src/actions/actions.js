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

export const saveSkill = (questionData, skillsLength) => {
  const colours = ['#D15656', '#CB61C9', '#DB7B34', '#C5BE3F', '#A6DB45', '#8396AC', '#9568B2', '#276C2D', '#3ED5AC', '#F1CC1F'];
  function getNextColor() {
    return colours[skillsLength % 10];
  }
  const color = getNextColor();
  const skill = { skill: questionData.skillType, color };
  return (dispatch) => {
    axios.post('/saveSkill', skill)
      .then((response) => {
        questionData.skill_id = response.data.id;
        dispatch(fetchSkills());
        dispatch(saveQuestion(questionData));
      })
      .catch(function (error) {
      });
  };
}

// reducers for toggling show (eg: {display: block} and hide {display: none}):
export const showLogin = (login) => ({
  type: types.SHOW_LOGIN,
  payload: login,
});

export const showSignUp = (signup) => ({
  type: types.SHOW_SIGNUP,
  payload: signup,
});

export const showLogoutButton = (logoutButton) => ({
  type: types.SHOW_LOGOUT_BUTTON,
  payload: logoutButton,
});

export const showMain = (main) => ({
  type: types.SHOW_MAIN,
  payload: main,
});

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


export const saveAnswer = (answerData, skillId) => {
  return (dispatch) => {
    axios.post('/saveAnswer', answerData)
      .then((response) => {
console.log("Action saveAnswer response", response);
        dispatch(addAnswer(response.data));
        dispatch(fetchQuestions(skillId));
        dispatch(changeView(views.REGULAR_VIEW));
      })
      .catch(function (error) {
console.log("Action saveAnswer error", error);        
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

export const setSelectedQuestionSkill = (skillId) => ({
  type: types.SET_QUESTION_SKILL,
  payload: skillId,
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
