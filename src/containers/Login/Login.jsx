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
  // totalCards: store.cards.totalCards,
  // totalMarkets: store.markets.totalMarkets
  login: store.login,
});

const mapDispatchToProps = dispatch => ({
  // return bindActionCreators(actionCreators, dispatch);
  showLogin: (login) => {
    dispatch(actions.showLogin(login));
  }
});

// function that on click, makes post request to server
// if login credentials are correct, submit action to store to change loginRecur's display to 'none'

function sendCredentials () {
  axios.post('/login', {
    email: 'woojun@gmail.com',
    password: 1234
  })
  .then(function (response) {
    console.log('RESPONSE FROM DB:', response);
  })
  .catch(function (error) {
    console.log('kelly post')
    console.log('ERROR FROM DB', error);
  });
}


class LoginContainer extends Component {
  constructor(props) {
    // console.log("props", props);
    super(props);
  }

  componentDidMount() {
    console.log("actions", actions);
        console.log('componentDidMount');
        //Update login reducer boolean ....
        // const data = true;
        // this.props.showLogin(data);
        // console.log('props in login', this.props.login.display)
        console.log('props in login', this.props.login)   
        sendCredentials();     
      }

  render() {
    return(
      <div id="loginContainer" style={{display: this.props.login}}>
        <div id="loginOuterBox">
          <h1 id="loginHeader">Login</h1>
          { /* Start adding components here... */ }
          <form id="loginForm">
            <h2>Name / Email</h2><br></br>
            <input type="text" name="nameOrEmail"></input><br></br>
            <h2>Password</h2><br></br>
            <input type="text" name="password"></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);