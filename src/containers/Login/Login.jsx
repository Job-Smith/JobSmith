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
// import Login from '../containers/Login.jsx';
// Import css
import css from './Login.css'; 
import * as actions from './../../actions/actions.js';
import axios from 'axios';


const mapStateToProps = store => ({
  // add pertinent state here
  login: store.login,
  signUp: store.signUp,
  logoutButton: store.logoutButton
});

const mapDispatchToProps = dispatch => ({
  // return bindActionCreators(actionCreators, dispatch);
  showLogin: (login) => {
    dispatch(actions.showLogin(login));
  },
  showSignUp: (signUp) => {
    dispatch(actions.showSignUp(signUp));
  },
  showLogoutButton: (logoutButton) => {
    dispatch(actions.showLogoutButton(logoutButton));
  }
});

// function that on click, makes post request to server
// if login credentials are correct, submit action to store to change loginRecur's display to 'none'

function sendCredentials (that) {
  console.log('this inside of sendCredentials', that);
  axios.post('/login', {
    // email: 'woojun@gmail.com',
    email: document.getElementById('loginEmail').value,
    // password: 1234
    password: document.getElementById('loginPassword').value
  })
  .then(function (response) {
    console.log(response);
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    that.props.showLogin('none');
    that.props.showLogoutButton('block'); 
  })
  .catch(function (error) {
    console.log('error:', error);
  });
}

function hideLoginShowSignUp (that) {
  document.getElementById('loginEmail').value = "";
  document.getElementById('loginPassword').value = "";
  that.props.showLogin('none');
  // show sign up page:
  that.props.showSignUp('block');
}

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="loginContainer" style={{display: this.props.login}}>
        <div id="loginOuterBox">
        <h1 id="loginHeader">Jobsmith</h1>
          {/* <h1 id="loginHeader">Login</h1> */}
          { /* Start adding components here... */ }
          <form id="loginForm">
            {/* <h2>Email</h2><br></br> */}
            <input id="loginEmail" type="text" name="nameOrEmail" placeholder="Email"></input><br></br>
            <br></br>
            {/* <h2>Password</h2><br></br> */}
            <input id="loginPassword" type="password" name="password" placeholder="Password"></input>
            <input id="submitBtn" type="button" value="Submit" onClick={() => sendCredentials(this)}></input>
          </form>
          {/* <h2>Not a user? Sign up here</h2> */}
          <input id="signUpBtn" type="button" value="Not A User? Sign Up" onClick={() => hideLoginShowSignUp(this)}></input>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);