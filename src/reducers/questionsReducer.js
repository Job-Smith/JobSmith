import * as types from '../constants/actionTypes';

const initialState = [];

const questionsReducer = (state=initialState, action) => {

  switch(action.type) {

    case types.REPLACE_QUESTIONS:
      return action.payload;
    
    default:
      return state;
  }
};

export default questionsReducer;