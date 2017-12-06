import React from 'react';

// import from child components...
// import Answer from './../Answer/Answer.jsx'

// Import css
import css from './Answer.css';

const Answer = props => {
    
  console.log("Answer props", props);  
  
  return (
    <div className='answer'>
      {props.answer.answer}
    </div>
  );
};

export default Answer;