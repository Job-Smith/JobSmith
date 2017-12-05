import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import { bindActionCreators } from 'redux';
import * as actions from './../../actions/actions.js';

// Import css
import css from './MainContainer.css';


const mapStateToProps = store => ({
  // add pertinent state here
  skills: store.skills,
});

const mapDispatchToProps = dispatch => ({
  // return bindActionCreators(actionCreators, dispatch);
  updateSkills: (skills) => {
    dispatch(actions.updateSkills(skills));
  }
});

class MainContainer extends Component {
  constructor(props) {
    console.log("props", props);
    super(props);
  }

  componentDidMount() {
console.log("actions", actions);
    console.log('componentDidMount');
    //Do AJAX request to get skills ....
    const data = [ 'Javascript', 'Java', 'HTML', 'CSS' ];
    this.props.updateSkills(data);

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
            <button id="loginBtn">Login</button>
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