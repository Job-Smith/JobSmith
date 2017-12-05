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


const mapStateToProps = store => ({
  // add pertinent state here
  // totalCards: store.cards.totalCards,
  // totalMarkets: store.markets.totalMarkets
  login: store.login,
});

const mapDispatchToProps = dispatch => ({
  // return bindActionCreators(actionCreators, dispatch);
});

class LoginContainer extends Component {
  constructor(props) {
    console.log("props", props);
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="loginHeader">JobSmith</h1>
          { /* Start adding components here... */ }
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);