import React, { Component } from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
  }
  handleChange = ({target}) => {
    this.setState({[target.name]: target.value});
  }
  childHandleLogin = (e) => {
    this.props.parentHandleLogin(e);
  }
  childHandleSignup = (e) => {
    this.props.parentHandleSignup(e, this.state.username, this.state.password);
  }
  render() {
    return (
      <div className="loginBox">
        <form>
          <div className="centerRow">
            <input
              placeholder="Username"
              className="loginInput"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="centerRow">
            <input
              placeholder="Password"
              className="loginInput"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="centerRow">
            <button className="loginButton" onClick={(e) => {this.childHandleLogin(e)}}>Login</button>
          </div>
          <div className="centerRow">
            <button className="signUpButton" onClick={(e) => {this.childHandleSignup(e)}}>Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Login;
