import React from 'react';

// Import css
import css from './NewAnswer.css';

const NewAnswer = props => {
  
  function submitAnswer() {
    const answer = document.getElementById('answerField').value;
    const answerObj = { rating: 0, answer, user_id: props.user_id, question_id: props.question_id };
    props.saveAnswer(answerObj, props.skillId);
  } 

  return (
    <div className='answerWrapper'>
      <div className='forumWrapper'>
        <div className='labelWrapper'>
          <label>
            <strong><u>Answer</u></strong><br/>
            <textarea id='answerField' className='answerInput' type='text'></textarea>
          </label>
          <button onClick={submitAnswer}>'Submit'</button>

        </div>
      </div>

    </div>
  );
};

export default NewAnswer;