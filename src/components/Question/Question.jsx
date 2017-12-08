import React from 'react';

// import from child components...
import Answer from './../Answer/Answer.jsx'
import SkillsMarker from './../SkillsMarker/SkillsMarker.jsx'
import QuestionButton from './../QuestionButton/QuestionButton.jsx'
import LastAnswerRow from './../LastAnswerRow/LastAnswerRow.jsx'

// Import css
import css from './Question.css';

const Question = props => {
    
  const { question } = props;
  const answers = question.answers;
  const answerList = [];
  const hasAnswers = answers.length > 0;
  
  if (question.expand) {
    for (let i = 0, ilen = answers.length; i < ilen; i += 1) {
      answerList.push(<Answer key={i+'ans'} answer={answers[i]}/>);
    }
    answerList.push(<LastAnswerRow key={'LastAnswerRow'} showNewAnswer={props.showNewAnswer} questionId={question.id} skillId={question.skill_id} />);
  }

  return (
    <div className="questionItem">
      <div className='question'>
        <div className="skillHolder">
          <SkillsMarker skill={props.skill}/>
        </div>
        <div className="textHolder">
          {question.question}
        </div>
        <div className="company">
          {question.company}
        </div>
        <QuestionButton expandAnswers={props.expandAnswers} questionId={question.id} expand={question.expand} hasAnswers={hasAnswers}
<<<<<<< HEAD
                        showNewAnswer={props.showNewAnswer} className="questionButton"/>
=======
                        showNewAnswer={props.showNewAnswer} skillId={question.skill_id} />
>>>>>>> e9cb7021fc0054106cab771ed94f915534c2209c
      </div>
      <div className="answerHolder">
        {answerList}
      </div>
    </div>
  );
};

export default Question;