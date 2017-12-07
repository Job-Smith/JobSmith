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

export const addQuestion = (question) => ({
  type: types.ADD_QUESTION,
  payload: question,
});

export const fetchQuestions = (skillType) => {
  console.log("fetchQuestions CALLED");
  console.log("skillType", skillType);
  return (dispatch) => {
    axios.post('/getQuestions', { skill_id: skillType })
      .then((response) => {
        console.log("response", response.data);
        dispatch(replaceQuestions(response.data));
      })
      .catch(function (error) {
        console.log('Fetch Questions ERROR: ', error);
      });
  };
};

export const saveQuestion = (questionData) => {
  console.log('Save Question -> Actions', questionData);
  return (dispatch) => {
    axios.post('/question', questionData)
      .then((response) => {
        dispatch(fetchQuestions(response.data.skill_id));
      })
      .catch(function (error) {
        console.log('Save Question ERROR: ', error);
      });
  };
}

// display reducer
export const changeView = (view) => ({
  type: types.CHANGE_VIEW,
  payload: view,
});
