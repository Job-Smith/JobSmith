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
import css from './SignUp.css'; 
import * as actions from './../../actions/actions.js';
import axios from 'axios';


const mapStateToProps = store => ({
  // add pertinent state here
  // totalCards: store.cards.totalCards,
  // totalMarkets: store.markets.totalMarkets
  login: store.login,
  signUp: store.signUp
  // import signUp from store
  // signUp: store.signUp
});

const mapDispatchToProps = dispatch => ({
  // return bindActionCreators(actionCreators, dispatch);
  showLogin: (login) => {
    dispatch(actions.showLogin(login));
  }
});

// function that on click, makes post request to server
// if login credentials are correct, submit action to store to change loginRecur's display to 'none'

function signUpUser (that) {
  console.log('this inside of signUpUser', that);
  axios.post('/register', {
    // email: 'woojun@gmail.com',
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    // password: 1234
    password: document.getElementById('password').value
  })
  .then(function (response) {
    console.log('response:', response.data);
    // that.props.showLogin('none');
  })
  .catch(function (error) {
    console.log('error:', error);
  });
}

// function logInput () {
//     var name = document.getElementsById("name").value
//     console.log(name)
// }


class SignUpContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      console.log('props in signUp', this.props)
    // console.log("actions", actions);
        // console.log('componentDidMount');
        //Update login reducer boolean ....
        // const data = true;
        // this.props.showLogin(data);
        // console.log('props in login', this.props.login.display)
        // console.log('props in login', this.props.login)   
        // sendCredentials();  
        // showLogin(this.props.showLogin('block'))                
      }

  render() {
    return(
    //   <div id="signUpContainer" style={{display: this.props.login}}>
      <div id="signUpContainer" style={{display: this.props.signUp}}>
        <div id="signUpOuterBox">
          <h1 id="signUpHeader">Sign Up</h1>
          { /* Start adding components here... */ }
          <form id="signUpForm">
            <h2>Name</h2><br></br>
            <input id="name" type="text" name="name"></input><br></br>
            <h2>Email</h2><br></br>
            <input id="email" type="text" name="name"></input><br></br>
            <h2>Password</h2><br></br>
            <input id="password" type="text" name="password"></input>
            <input type="button" value="Submit" onClick={() => signUpUser(this)}></input>
          </form>
        </div>
      </div>
    )
  }

}

// export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);