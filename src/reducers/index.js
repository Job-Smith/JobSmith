import { combineReducers } from 'redux';

// import all reducers here
import skillsReducer from './skillsReducer';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import questionsReducer from './questionsReducer';
import displayReducer from './displayReducer.js';
import userReducer from './userReducer';
// import showLoginButtonReducer from './showLoginButtonReducer'; 
import logoutButtonReducer from './logoutButtonReducer';

// combine reducers
const reducers = combineReducers({
  skills: skillsReducer,
  login: loginReducer,
  signUp: signUpReducer,
  logoutButton: logoutButtonReducer,
  questions: questionsReducer,
  display: displayReducer,
  user: userReducer 
});

// make the combined reducers available for import
export default reducers;

