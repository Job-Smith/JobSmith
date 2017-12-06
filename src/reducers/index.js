import { combineReducers } from 'redux';

// import all reducers here
import skillsReducer from './skillsReducer';
import loginReducer from './loginReducer';
import questionsReducer from './questionsReducer';
import displayReducer from './displayReducer';


// combine reducers
const reducers = combineReducers({
  skills: skillsReducer,
  login: loginReducer,
  questions: questionsReducer,
  display: displayReducer
});

// make the combined reducers available for import
export default reducers;

