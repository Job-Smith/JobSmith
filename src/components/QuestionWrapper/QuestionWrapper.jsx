import React from 'react';

// import from child components...
import Question from './../Question/Question.jsx'

// Import css
import css from './QuestionWrapper.css';

const QuestionWrapper = props => {
    
  const questionsList = [];

  for (let i = 0, ilen = props.questions.length; i < ilen; i += 1) {
    const question = props.questions[i];
    const skill = props.skills.filter(skill => skill.id === question.skill_id)[0];
    questionsList.push( <Question key={i + '_question'} question={question} skill={skill} expandAnswers={props.expandAnswers} showNewAnswer={props.showNewAnswer} />);
  }

  return (
    <div className='questionWrapper'>
      {questionsList}
    </div>
  );
};

export default QuestionWrapper;