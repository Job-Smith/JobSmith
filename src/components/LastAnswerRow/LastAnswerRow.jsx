import React from 'react';

// import from child components...
import Answer from './../Answer/Answer.jsx'
import SkillsMarker from './../SkillsMarker/SkillsMarker.jsx'
import QuestionButton from './../QuestionButton/QuestionButton.jsx'

// Import css
import css from './LastAnswerRow.css';

const LastAnswerRow = props => {
    
  return (
    <div className="row">
      <QuestionButton expandAnswers={null} questionId={props.questionId} expand={true} hasAnswers={false}
                      showNewAnswer={props.showNewAnswer} skillId={props.skillId} />

    </div>
  );
};

export default LastAnswerRow;