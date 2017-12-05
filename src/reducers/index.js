import { combineReducers } from 'redux';

// import all reducers here
import skillsReducer from './skillsReducer';
import loginReducer from './loginReducer';
import questionsReducer from './questionsReducer';


// combine reducers
const reducers = combineReducers({
  skills: skillsReducer,
  login: loginReducer,
  questions: questionsReducer
});

// make the combined reducers available for import
export default reducers;

