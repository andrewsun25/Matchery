// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
import './SignUp.css';

// COMPONENT CLASS
class SignUp extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      retypePassword: "",
    }
  }

  childHandleSelectEvent = (e) => {
  	this.props.parentHandleSelectEvent(e);
  }

  // This function updates either the username
  // or the password state when the respective
  // input fields are updated
  handleChange = ({target}) => {
    this.setState({[target.name]: target.value});
  }

  goBackToDefault = (e) => {
    this.props.parentHandleExitSignup(e);
  }

  processSignUp = (e) => {
    e.preventDefault();
    alert("process sign up!");
  }

  // Render the component
  render() {

    // Return the component frame
    return (

      <section className="section-sign-up">

        <div className="section-sign-up__panel">

          <ion-icon
            onClick={(e) => {this.goBackToDefault(e)}}
            class="section-sign-up__close-icon" name="close"></ion-icon>

          <form
            onSubmit={(e) => {this.processSignUp(e)}}
            className="auth-form">

              <div className="auth-form__form-group">
                  <input type="text" className="auth-form__form-input" placeholder="First name" name="firstName" value={this.state.firstName} onChange={this.handleChange} required />
              </div>

              <div className="auth-form__form-group">
                  <input type="text" className="auth-form__form-input" placeholder="Last name" name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
              </div>

              <div className="auth-form__form-group">
                  <input type="email" className="auth-form__form-input" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} required />
              </div>

              <div className="auth-form__form-group">
                  <input type="text" className="auth-form__form-input" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} required />
              </div>

              <div className="auth-form__form-group">
                  <input type="password" className="auth-form__form-input" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required />
              </div>

              <div className="auth-form__form-group u-margin-bottom-hg">
                  <input type="password" className="auth-form__form-input" placeholder="Retype password" name="retypePassword" value={this.state.retypePassword} onChange={this.handleChange} required />
              </div>

              <div className="auth-form__form-group">
                  <input
                    type="submit"
                    className="auth-form__form-submit auth-form__form-submit--high-action"
                    value="Sign Up" />
              </div>

          </form>
        </div>
    	</section>
    );
  }
}

export default SignUp;
