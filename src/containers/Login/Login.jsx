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
import css from './Login.css'; 
import * as actions from './../../actions/actions.js';
import axios from 'axios';


const mapStateToProps = store => ({
  // add pertinent state here
  login: store.login,
  signUp: store.signUp,
  logoutButton: store.logoutButton,
  user: store.user,
  showMain: store.showMain
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
  },
  setUser: (userId) => {
    dispatch(actions.setUser(userId));
  },
  showMain: (main) => {
    dispatch(actions.showMain(main));
  }
});

function sendCredentials (that) {
  axios.post('/login', {
    email: document.getElementById('loginEmail').value,
    password: document.getElementById('loginPassword').value
  })
  .then(function (response) {
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    // toggle hide and show components
    that.props.showLogin('none');
    that.props.showLogoutButton('block'); 
    that.props.showMain('block');    
    // set user to response data id from database  
    that.props.setUser(response.data.id);
  })
  .catch(function (error) {
    console.log('error:', error);
  });
}

function hideLoginShowSignUp (that) {
  document.getElementById('loginEmail').value = "";
  document.getElementById('loginPassword').value = "";
  // toggle hide and show components
  that.props.showLogin('none');
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
        <img className ='loginLogo' src="https://www.codesmith.io/images/main/codesmith-logo-md.png" />
        <h1 id="loginHeader">Jobsmith</h1>
          <form id="loginForm">
            <input id="loginEmail" type="text" name="nameOrEmail" placeholder="Email"></input><br></br>
            <br></br>
            <input id="loginPassword" type="password" name="password" placeholder="Password"></input>
            <input id="submitBtn" type="button" value="Submit" onClick={() => sendCredentials(this)}></input>
          </form>
          <input id="signUpBtn" type="button" value="Not A User? Sign Up" onClick={() => hideLoginShowSignUp(this)}></input>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);