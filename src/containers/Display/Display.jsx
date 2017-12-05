import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../actions/actions.js';

// import from child components...
// import SkillsMenu from './../../components/SkillsMenu/SkillsMenu.jsx'
// import Display from './../Display/Display.jsx'

// Import css
import css from './Display.css';


const mapStateToProps = store => ({
    questions: store.questions,
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

  componentDidMount() {
    // //Do AJAX request to get skills ....
    // const data = [ { _id: 1, skill: 'Javascript', color: '#E58017' }, 
    //                {_id: 2, skill: 'Java', color: '#E51742' }, 
    //                {_id: 3, skill: 'HTML', color: '#E517AC' }, 
    //                {_id: 4, skill: 'CSS', color: '#5417E5' } ];
    // this.props.updateSkills(data);
  }

  render() {
    return(
      <div className="displayContainer">
        DISPLAY CONTAINER
      </div>  
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Display);