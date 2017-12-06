import * as types from '../constants/actionTypes'
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

//login reducer
export const showLogin = (login) => ({
  type: types.SHOW_LOGIN,
  payload: login,
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

export const addQuestion = (question) => ({
  type: types.ADD_QUESTION,
  payload: question,
});

export const fetchQuestions = (skillType) => {
  return (dispatch) => {
    axios.get('/getQuestions', { skillType })
      .then((response) => {
        dispatch(replaceQuestions(response.data));
      })
      .catch(function (error) {
        console.log('Fetch Questions ERROR: ', error);
      });
  };
};

export const saveQuestion = (questionData) => {
  console.log('Save Question...');
  return (dispatch) => {
    axios.post('/question', { questionData })
      .then((response) => {
        dispatch(replaceQuestions(response.data));
      })
      .catch(function (error) {
        console.log('Fetch Questions ERROR: ', error);
      });
  };
}

// display reducer
export const changeView = (view) => ({
  type: types.CHANGE_VIEW,
  payload: view,
});
