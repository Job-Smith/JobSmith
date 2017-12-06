import React from 'react';

// Import css
import css from './QuestionButton.css';

const QuestionButton = props => {
    
  const symbol = props.expand ? '-' : '+';

  function expanderClicked() {
    props.expandAnswers(props.questionId);
  }

  if (props.hasAnswers) {
    return (
      <div className="questionButton" onClick={expanderClicked}>{symbol}</div>
    );
  }

  return (
    <div></div>
  ); 
};

export default QuestionButton;