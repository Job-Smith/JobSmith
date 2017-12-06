import * as types from '../constants/actionTypes';
import * as views from '../constants/displayTypes.js';

const initialState = views.REGULAR_VIEW;

const displayReducer = (state=initialState, action) => {
    
  switch(action.type) {
    
    case types.CHANGE_VIEW:
      return action.payload;

    default:
      return state;
  }
};

export default displayReducer;