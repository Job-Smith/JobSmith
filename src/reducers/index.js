import { combineReducers } from 'redux';

// import all reducers here
import skillsReducer from './skillsReducer';
import loginReducer from './loginReducer';

// combine reducers
const reducers = combineReducers({
  skills: skillsReducer,
  login: loginReducer
});

// make the combined reducers available for import
export default reducers;

