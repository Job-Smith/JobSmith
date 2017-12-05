
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
  const hello = props.hello;
  // const isLoggedIn = props.login;
  // console.log('props login', props.login);
  console.log('PROPS', props.isLoggedIn);
  console.log('propsit', props)
  // let isLoggedIn = props.isLoggedIn;
  // console.log('login from store', store.login);
  if (isLoggedIn) {
    return <LoginContainer/>;
  }
  return <MainContainer/>;
}

// function ShowLogin(props) {
//   const loggedIn = props.login.active;
//   if (LoggedIn) {
//     return <LoginContainer/>;
//   }
//   return <MainContainer/>;
// }


class App extends Component {

  // ShowLogin(props) {
  //   const loggedIn = props.login.active;
  //   if (LoggedIn) {
  //     return <LoginContainer/>;
  //   }
  //   return <MainContainer/>;
  // }

  constructor(props) {
    // console.log('props in App', props);
    // console.log('props login 2', props.login.active);
    super(props);
  }

  // if props login active is true: render login

  // if store's Login show is true, replace MainContainer 
  // ..with LoginContainer
  render() {
    // const state = store.getState();
    // console.log(state);
    // var ShowLogin = this.ShowLogin.bind(this);
    return(
      <div>
        {/* <Show isLoggedIn={true} /> */}
        {/* <ShowLogin/> */}
        {/* {<ShowLogin/>} */}
        <LoginContainer/>
        <MainContainer/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);