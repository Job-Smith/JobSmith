/**
 * ************************************
 *
 * @module  LoginContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import { bindActionCreators } from 'redux';
// Import css
import css from './SignUp.css'; 
import * as actions from './../../actions/actions.js';
import axios from 'axios';


const mapStateToProps = store => ({
  // add pertinent state here
  signUp: store.signUp,
  logoutButton: store.logoutButton,
  showMain: store.showMain
});

const mapDispatchToProps = dispatch => ({
  // return bindActionCreators(actionCreators, dispatch);
  showSignUp: (signUp) => {
    dispatch(actions.showSignUp(signUp));
  },
  showLogoutButton: (logoutButton) => {
    dispatch(actions.showLogoutButton(logoutButton));
  },
  showMain: (main) => {
    dispatch(actions.showMain(main));
  }
});

function signUpUser (that) {
  axios.post('/register', {
    name: document.getElementById('signUpName').value,
    email: document.getElementById('email').value,
    password: document.getElementById('signUpPassword').value
  })
  .then(function (response) {
    document.getElementById('signUpName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('signUpPassword').value = '';
    // toggle hide and show components
    that.props.showSignUp('none');   
    that.props.showLogoutButton('block'); 
    that.props.showMain('block');
  })
  .catch(function (error) {
    console.log('error:', error);
  });
}

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="signUpContainer" style={{display: this.props.signUp}}>
        <div id="signUpOuterBox">
          <h1 id="signUpHeader">Sign Up</h1>
          <form id="signUpForm">
            <input id="signUpName" type="text" name="name" placeholder="Name"></input><br></br>
            <input id="email" type="text" name="name" placeholder="Email"></input><br></br>
            <input id="signUpPassword" type="password" name="password" placeholder="Password"></input>
            <input id="submitBtn" type="button" value="Submit" onClick={() => signUpUser(this)}></input>
          </form>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);