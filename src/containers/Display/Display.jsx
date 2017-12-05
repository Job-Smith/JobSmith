import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../actions/actions.js';

// import from child components...
import QuestionWrapper from './../../components/QuestionWrapper/QuestionWrapper.jsx'

// Import css
import css from './Display.css';


const mapStateToProps = store => ({
    questions: store.questions,
    skills: store.skills
});


const mapDispatchToProps = dispatch => ({
  // updateSkills: (skills) => {
  //   dispatch(actions.updateSkills(skills));
  // },
  // markerClicked:(skillType) => {
  //   console.log("skillType", skillType);
  //   //DO AJAX HERE??
  //   dispatch(actions.updateQuestions(skillType))
  // }
});

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="displayContainer">
        <QuestionWrapper questions={this.props.questions} skills={this.props.skills}/>
      </div>  
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Display);