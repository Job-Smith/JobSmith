import React from 'react';

// Import css
import css from './NewAnswer.css';

const NewAnswer = props => {
  
  console.log("NewAnswer props", props);
   // props.saveAnswer() to save the answer
   // argument will be { rating, answer, user_id: props.user_id, question_id: props.question_id }

  function submitAnswer() {
    const answer = document.getElementById('answerField').value;
    const answerObj = { rating: 0, answer, user_id: props.user_id, question_id: props.question_id };
console.log("answerObj", answerObj);
    props.saveAnswer(answerObj);
  } 

  return (
    <div className='answerWrapper'>
      <div className='labelWrapper'>
        <label>
          <strong><u>Answer</u></strong><br/>
          <textarea id='answerField' className='answerInput' type='text'></textarea>
        </label>
      </div>
      <button onClick={submitAnswer}>'Submit'</button>
    </div>
  );
};

export default NewAnswer;