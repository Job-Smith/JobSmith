/**
 * ************************************
 *
 * @module  MainContainer
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
import Login from '../containers/Login.jsx';


const mapStateToProps = store => ({
  // add pertinent state here
  // totalCards: store.cards.totalCards,
  // totalMarkets: store.markets.totalMarkets
});

const mapDispatchToProps = dispatch => ({
  // return bindActionCreators(actionCreators, dispatch);
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">JobSmith</h1>
          { /* Start adding components here... */ }
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);