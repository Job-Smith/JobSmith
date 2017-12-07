import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../actions/actions.js';
import axios from 'axios';
import * as views from '../../constants/displayTypes.js';

// import from child components...
import SkillsMenu from './../../components/SkillsMenu/SkillsMenu.jsx'
import Display from './../Display/Display.jsx'

// Import css
import css from './MainContainer.css';


const mapStateToProps = store => ({
    skills: store.skills,
    login: store.login,
    logoutButton: store.logoutButton,
    showMain: store.showMain,
    user: store.user
});

const mapDispatchToProps = dispatch => ({

////////////////////////////////////////  
// To be removed after hard coding is removed 
  updateSkills: (skills) => {
    dispatch(actions.updateSkills(skills));
  },
//////////////////////////////////////  
  fetchSkills: () => {
    dispatch(actions.fetchSkills());
  },
  showAddQuestion: () => {
    dispatch(actions.changeView(views.QUESTION_VIEW));
  },
  setUser: (userId) => {
    console.log('userIdINSETUSER', userId);    
    dispatch(actions.setUser(userId));
  },
  showLoginAndHideLogoutButton: (login, that) => {
    dispatch(actions.showLogin(login));
    // hide logout button:
    dispatch(actions.showLogoutButton('none'));
    dispatch(actions.showMain('none'));
    // dispatch(actions.setUser(-1));
    let newUserId = -1;
    that.props.setUser(newUserId);
    console.log('USER STATUS', that.props.user);
  },
  showLogoutButton: (logoutButton) => {
    dispatch(actions.showLogoutButton(logoutButton));
  },
  ////// for testing: /////////
  // obfuscateMain: (main) => {
  //   dispatch(actions.obfuscateMain(main));
  // },
  /////////////////////////////
  markerClicked:(skillType) => {
    dispatch(actions.changeView(views.REGULAR_VIEW));
    dispatch(actions.fetchQuestions(skillType));

    const data = [  { 
                      id: 100,
                      question: 'What is recursion?',
                      skill_id: 1,
                      company: 'Amazon',
                      date: new Date('01/02/2001'),
                      answers: [
                                  { 
                                    id: 1043,
                                    answer : 'Invoking the function from within itself',
                                    resource : 'http://www.geeksforgeeks.org/recursion/',
                                    rating: 2
                                  }
                               ]
                    }, 
                    {
                      id: 101,
                      question: "'use strict' at the beginning of a JavaScript source file - what and why?",
                      skill_id: 1,
                      company: 'Google',
                      date: new Date('02/03/2002'),
                      answers: [
                                  // {
                                  //   id: 1013,
                                  //   answer : 'The purpose of "use strict" is to indicate that the code should be executed in "strict mode".',
                                  //   resource : 'http://www.geeksforgeeks.org/recursion/',
                                  //   rating: 1
                                  // },
                               ]
                    }, 
                    {
                      id: 102,
                      question: 'Map, Reduce, Filter',
                      skill_id: 1,
                      company: 'Facebook',
                      date: new Date('03/04/2003'),
                      answers: [
                                  {
                                    id: 1001,
                                    answer : '',
                                    resource : 'https://www.w3schools.com/jsref/jsref_map.asp',
                                    rating: 1
                                  },
                                  {
                                    id: 1002,
                                    answer : 'Working with arrays is a daily task for most developers. And one of the most common tasks is taking an array and filtering it down to a subset of the elements it contains.',
                                    resource : '',
                                    rating: 1
                                  },
                                  {
                                    id: 1003,
                                    answer : 'Great resource for all of them..',
                                    resource : 'http://reactivex.io/learnrx/',
                                    rating: 1
                                  },
                               ]
                    } ];
    // dispatch(actions.replaceQuestions(data));
  }
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    // const data = [ { id: 1, skill: 'Javascript', color: '#E58017' }, 
    //                { id: 2, skill: 'Java', color: '#E51742' }, 
    //                { id: 3, skill: 'HTML', color: '#E517AC' }, 
    //                { id: 4, skill: 'CSS', color: '#5417E5' } ];

    // this.props.updateSkills(data); 
    this.props.fetchSkills();
  }

  render() {
    return (
      <div className="container" style={{display: this.props.showMain}}>
        <div className="top">
          <h1 id="header">JobSmith</h1>
          <button id="logoutBtn" style={{display: this.props.logoutButton}} onClick={() => this.props.showLoginAndHideLogoutButton('block', this)}>Logout</button>
        </div>
        <div className="bottom">
          <div className="left">
           <SkillsMenu skills={this.props.skills} markerClicked={this.props.markerClicked} showAddQuestion={this.props.showAddQuestion}/>
          </div>
          <div className="display">
            <Display />
          </div>
          <div className="right">
            Right
          </div>
        </div>
      </div>  
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);