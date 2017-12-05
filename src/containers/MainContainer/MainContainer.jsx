import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import { bindActionCreators } from 'redux';

// Import css
import css from './MainContainer.css';
// import Login from '../containers/Login.jsx';


const mapStateToProps = store => ({
  // add pertinent state here
  skills: store.skills,
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
        <div className="top">
          <h1 id="header">JobSmith</h1>
          { /* Start adding components here... */ }
        </div>
        <div className="bottom">
          <div className="left">
            Left
          </div>
          <div className="display">
            Display
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