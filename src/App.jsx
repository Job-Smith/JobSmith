
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainContainer from './containers/MainContainer/MainContainer.jsx';
import LoginContainer from './containers/Login/Login.jsx';

const mapStateToProps = store => ({
  // add pertinent state here
  login: store.login,
});

const mapDispatchToProps = dispatch => ({
  // return bindActionCreators(actionCreators, dispatch);
});

class App extends Component {

  constructor(props) {
    // console.log('props in App', props);
    // console.log('props in Login', props.login.display);
    super(props);
  }

  render() {
    return(
      <div>
        {/*<LoginContainer/>*/}
        <MainContainer/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);