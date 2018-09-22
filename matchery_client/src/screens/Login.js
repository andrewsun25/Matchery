import React, { Component } from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  childHandleLogin = (e) => {
    this.props.parentHandleLogin(e);
  }
  handleSignUp = (event) => {
    this.props.handleSignUp();
  }
  render() {
    return (
      <div className="loginBox">
        <form>
          <div className="centerRow">
            <input placeholder="Username" className="loginInput" type="text" name="username" />
          </div>
          <div className="centerRow">
            <input placeholder="Password" className="loginInput" type="password" name="password" />
          </div>
          <div className="centerRow">
            <button className="loginButton" onClick={(e) => {this.childHandleLogin(e)}}>Login</button>
          </div>
          <div className="centerRow">
            <button className="signUpButton" onClick={this.handleSignUp}>Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Login;
