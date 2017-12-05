import React from 'react';

// import from child components...
import Question from './../Question/Question.jsx'

// Import css
import css from './QuestionWrapper.css';

const QuestionWrapper = props => {
    
  const questionsList = [];

  for (let i = 0, ilen = props.questions.length; i < ilen; i += 1) {
    const question = props.questions[i];
    console.log("props.skill", props.skills);
    const skill = props.skills.filter(skill => skill.id === question.skills_id)[0];
    console.log("skill", skill);
    questionsList.push( <Question key={i + '_question'} question={question} skill={skill} />);
  }

  return (
    <div className='questionWrapper'>
      {questionsList}
    </div>
  );
};

export default QuestionWrapper;