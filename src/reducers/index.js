import { combineReducers } from 'redux';

// import all reducers here
import skillsReducer from './skillsReducer';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import questionsReducer from './questionsReducer';
import displayReducer from './displayReducer';
import userReducer from './userReducer';
import logoutButtonReducer from './logoutButtonReducer';
///////// for testing: //////////
import showMainReducer from './showMainReducer';
/////////////////////////////////

// combine reducers
const reducers = combineReducers({
  skills: skillsReducer,
  login: loginReducer,
  signUp: signUpReducer,
  logoutButton: logoutButtonReducer,
  questions: questionsReducer,
  display: displayReducer,
  ////////// for testing: /////////
  showMain: showMainReducer,
  /////////////////////////////////
  user: userReducer 
});

// make the combined reducers available for import
export default reducers;

