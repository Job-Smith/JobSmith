import React from 'react';

// import from child components...
// import Question from './../Question/Question.jsx'

// Import css
import css from './NewAnswer.css';

const NewAnswer = props => {
  
  console.log("NewAnswer props", props);
   // props.saveAnswer() to save the answer
   // argument will be { rating, answer, user_id: props.user_id, question_id: props.question_id }

  return (
    <div className='answerWrapper'>
      <form className='forumWrapper'>
        <div className='labelWrapper'>
          <label>
            <strong><u>Answer</u></strong><br/>
            <input className='answerInput' type='text'></input>
          </label>
        </div>
        <input type='submit' value='Submit'/>
      </form>
    </div>
  );
};

export default NewAnswer;