
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

// function showLogin(props) {
//   return <MainContainer/>;
// }

// function showMain(props) {
//   return <Login/>;
// }

function Show(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <LoginContainer/>;
  }
  return <MainContainer/>;;
}

class App extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  // if store's Login show is true, replace MainContainer 
  // ..with LoginContainer
  render() {
    
    return(
      <div>
        <Show isLoggedIn={true} />
        {/* <LoginContainer/> */}
        {/* <MainContainer/> */}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);