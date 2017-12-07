import * as types from '../constants/actionTypes';

const initialState = [];

const questionsReducer = (state=initialState, action) => {
  let questions;
  switch(action.type) {

    case types.REPLACE_QUESTIONS:
      questions = action.payload.map(question => {
        question.expand = false;
        const answerUpdate = question.answers.slice();
        question.answer = answerUpdate.map(answer => {});
        return question;
      });
      return questions;

    case types.ADD_ANSWER:
      const answer = action.payload;
      questions = state.map(q => {
        if (q.id === answer.question_id) {
          q.answers.unshift(answer);
        }
        return q;
      });
      return questions;  
       
    case types.EXPAND_ANSWERS:
      questions = state.slice();
      questions = questions.map(question => {
        if (question.id === action.payload) {
          question.expand = !question.expand;
        }
        return question;
      });
      return questions;  
    
    default:
      return state;
  }
};

export default questionsReducer;