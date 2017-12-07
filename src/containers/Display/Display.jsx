import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../actions/actions.js';
import * as views from '../../constants/displayTypes.js';

// import from child components...
import QuestionWrapper from './../../components/QuestionWrapper/QuestionWrapper.jsx';
import NewQuestion from './../../components/NewQuestion/NewQuestion.jsx';
import NewAnswer from './../../components/NewAnswer/NewAnswer.jsx';

// Import css
import css from './Display.css';


const mapStateToProps = store => ({
    questions: store.questions,
    skills: store.skills,
    display: store.display,
    user: store.user
});


const mapDispatchToProps = dispatch => ({
  expandAnswers: (questionId) => {
    dispatch(actions.expandAnswers(questionId));
  },
  showNewAnswer: (questionId) => {
    dispatch(actions.changeView(views.ANSWER_VIEW));
  },
  saveQuestion: (questionData) => {
    dispatch(actions.saveQuestion(questionData));
  },
  saveAnswer: (answerData) => {
    dispatch(actions.saveAnswer(answerData));
  },
  toggleShowOther: () => {
    dispatch(actions.toggleShowOther());
  },
  getAllQuestions: () => {
    dispatch(actions.fetchQuestions());
  },
});

class Display extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllQuestions();
  }

  render() {

    if (this.props.display === views.QUESTION_VIEW) {
      return(
        <div className="displayContainer">
          <NewQuestion skills={this.props.skills} saveQuestion={this.props.saveQuestion} showOther={1} toggleShowOther={this.props.user.showOther} />
        </div>  
      );   
    } else if (this.props.display === views.ANSWER_VIEW) {
      return(
        <div className="displayContainer">
          <NewAnswer saveAnswer={this.props.saveAnswer} user_id={1} question_id={2} />
        </div>  
      ); 
    } else { 
      return(
        <div className="displayContainer">
          <QuestionWrapper questions={this.props.questions} skills={this.props.skills} 
                           expandAnswers={this.props.expandAnswers} showNewAnswer={this.props.showNewAnswer} />
        </div>  
      );  
    } 
    
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Display);