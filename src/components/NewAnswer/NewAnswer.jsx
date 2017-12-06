import React from 'react';

// import from child components...
// import Question from './../Question/Question.jsx'

// Import css
import css from './NewAnswer.css';

const NewAnswer = props => {
  
   // will add function to props for saving thru the morning..
  // Still working on reducers.
  
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