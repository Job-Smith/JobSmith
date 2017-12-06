import React from 'react';

// import from child components...
// import Answer from './../Answer/Answer.jsx'

// Import css
import css from './Answer.css';

const Answer = props => {
    
  if (props.answer.resource) {

  }


  return (
    <div className='answer'>
      <div className="skillSpacer"></div>
      <div className="textHolder">
        {props.answer.answer}
      </div>
    </div>
  );
};

export default Answer;