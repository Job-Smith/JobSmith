import * as types from '../constants/actionTypes';
import * as views from '../constants/displayTypes.js';

const initialState = { userId: -1, selectedQuestion: -1 };

const userReducer = (state=initialState, action) => {
    
  switch(action.type) {
    
    case types.SET_USER:
      return { userId: action.payload, selectedQuestion: state.selectedQuestion };

    case types.SET_QUESTION:
      return return { userId: state.userId, selectedQuestion: action.payload };

    default:
      return state;
  }
};

export default displayReducer;