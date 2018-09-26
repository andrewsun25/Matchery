// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
import './SignUp.css';

// COMPONENT CLASS
class SignUp extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
  }

  childHandleSelectEvent = (e) => {
  	this.props.parentHandleSelectEvent(
      e,
      this.state.username,
      this.state.password);
  }

  // Render the component
  render() {

    // Return the component frame
    return (

      <section className="section-sign-up">

        <div className="section-sign-up__panel">

          <ion-icon class="section-sign-up__close-icon" name="close"></ion-icon>

          <form className="auth-form">

              <div className="auth-form__form-group">
                  <input type="text" className="auth-form__form-input" placeholder="First name" required />
              </div>

              <div className="auth-form__form-group">
                  <input type="text" className="auth-form__form-input" placeholder="Last name" required />
              </div>

              <div className="auth-form__form-group">
                  <input type="email" className="auth-form__form-input" placeholder="Email" required />
              </div>

              <div className="auth-form__form-group">
                  <input type="text" className="auth-form__form-input" placeholder="Username" required />
              </div>

              <div className="auth-form__form-group">
                  <input type="password" className="auth-form__form-input" placeholder="Password" required />
              </div>

              <div className="auth-form__form-group u-margin-bottom-hg">
                  <input type="password" className="auth-form__form-input" placeholder="Retype password" required />
              </div>

              <div className="auth-form__form-group">
                  <input type="submit" className="auth-form__form-submit auth-form__form-submit--high-action" value="Sign Up" />
              </div>

          </form>
        </div>
    	</section>
    );
  }
}

export default SignUp;