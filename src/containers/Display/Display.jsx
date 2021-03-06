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
  showNewAnswer: (questionId, skillId) => {
    dispatch(actions.setSelectedQuestionSkill(skillId));
    dispatch(actions.setSelectedQuestion(questionId));
    dispatch(actions.changeView(views.ANSWER_VIEW));
  },
  saveQuestion: (questionData, skills) => {
    const skillId = questionData.skill_id;
    if (skills.filter(skill => skill.id == skillId).length !== 0) {
      dispatch(actions.saveQuestion(questionData));
    } else {
      dispatch(actions.saveSkill(questionData, skills.length));
    }

  },
  saveAnswer: (answerData, skillId) => {
    dispatch(actions.saveAnswer(answerData, skillId));
  },
  setDisplayOther: (displayType) => {
    dispatch(actions.displayOther(displayType));
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
          <NewQuestion skills={this.props.skills} saveQuestion={this.props.saveQuestion} displayOther={this.props.user.displayOther} 
                       setDisplayOther={this.props.setDisplayOther} />
        </div>  
      );   
    } else if (this.props.display === views.ANSWER_VIEW) {
      return(
        <div className="displayContainer">
          <NewAnswer saveAnswer={this.props.saveAnswer} user_id={this.props.user.userId} question_id={this.props.user.selectedQuestion} 
                     skillId={this.props.user.selectedQuestionSkill} />
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