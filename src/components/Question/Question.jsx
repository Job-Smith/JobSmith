import React from 'react';

// import from child components...
import Answer from './../Answer/Answer.jsx'
import SkillsMarker from './../SkillsMarker/SkillsMarker.jsx'

// Import css
import css from './Question.css';

const Question = props => {
    
  const { question } = props;
  console.log("question", question);
  const answers = question.answers;
 
  return (
    <div className='question'>
      <div className="skillHolder">
        <SkillsMarker skill={props.skill}/>
      </div>
      <div className="textHolder">
        {question.question}
      </div>
      <div className="questionButton">+</div>
    </div>
  );
};

export default Question;