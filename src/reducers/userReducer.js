import * as types from '../constants/actionTypes';
import * as views from '../constants/displayTypes.js';

const initialState = { userId: -1, selectedQuestion: -1, displayOther: 'none' };

const userReducer = (state=initialState, action) => {
    
  switch(action.type) {
    
    case types.SET_USER:
      return { 
        ...state,
        userId: action.payload
      };

    case types.TOGGLE_SHOW_OTHER:
      return { 
        ...state,
        displayOther: action.payload
      };  

    case types.SET_QUESTION:
      return return { 
        ...state, 
        selectedQuestion: action.payload 
      };

    default:
      return state;
  }
};

export default displayReducer;