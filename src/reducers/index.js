import { combineReducers } from 'redux';

// import all reducers here
import skillsReducer from './skillsReducer';


// combine reducers
const reducers = combineReducers({
  skills: skillsReducer,
  // markets: marketsReducer,
});

// make the combined reducers available for import
export default reducers;

