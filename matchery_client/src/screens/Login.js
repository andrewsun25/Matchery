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

      <div className="login-panel u-center-text">

        <form className="auth-form">

          <div className="auth-form__form-group">
            <input type="text" className="auth-form__form-input" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} required />
          </div>

          <div className="auth-form__form-group u-margin-bottom-lg">
            <input type="password" className="auth-form__form-input" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required />
          </div>

          <div className="auth-form__form-group u-margin-bottom-sm">
            <input type="submit" className="auth-form__form-submit" value="Login" onClick={(e) => {this.childHandleLogin(e)}} />
          </div>

        </form>

        <a className="login-panel__sign-up-link" onClick={(e) => {this.childHandleSignup(e)}}>Sign Up</a>

      </div>

    );
  }
}

export default Login;
