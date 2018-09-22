// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
import './Login.css';

// COMPONENT CLASS
class Login extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = { // Initialize login values
      username: "",
      password: "",
    }
  }

  // This function updates either the username
  // or the password state when the respective
  // input fields are updated
  handleChange = ({target}) => {
    this.setState({[target.name]: target.value});
  }

  // This function calls a parent function
  // in the Main component to handle the
  // login process
  childHandleLogin = (e) => {
    this.props.parentHandleLogin(e);
  }

  // This function calls a parent function
  // in the Main component to handle the
  // signup process
  childHandleSignup = (e) => {
    this.props.parentHandleSignup(
      e,
      this.state.username,
      this.state.password
    );
  }

  // Render the component
  render() {

    // Return the component frame
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
            <button
              className="loginButton"
              onClick={(e) => {this.childHandleLogin(e)}}>
              Login
            </button>
          </div>
          <div className="centerRow">
            <button
              className="signUpButton"
              onClick={(e) => {this.childHandleSignup(e)}}>
              Sign Up
            </button>
          </div>
        </form>

      </div>
    );
  }
}
export default Login;
