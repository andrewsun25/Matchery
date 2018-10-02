// IMPORT COMPONENTS
import React, { Component } from 'react';
import 'whatwg-fetch';
import Dashboard from './Dashboard'; // Dashboard component
>>>>>>> Test server and user API
import Login from './Login'; // Login component
import SignUp from './SignUp'; // SignUp component
import JudgeEvent from './JudgeEvent'; // JudgeEvent component
import Candidate from './Candidate';

// IMPORT STYLING
import './Main.css'; // Header and background styling
// Note: Component-specific styling is imported through
// the components themselves

// MAIN APP COMPONENT CLASS
class App extends Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = { // Initialize screen states
      showLogin: true,
      showSignUp: false,
      showDashboard: false,
      showJudgeEvent: false,
      showCandidate: false,
    };
  }

  // This function is triggered when a
  // user presses the Learn More button
  handleMyAccount = (e) => {
    e.preventDefault();
    alert("handleMyAccount!");
  }

  // This function is triggered when a
  // user presses the Learn More button
  handleLearnMore = (e) => {
    e.preventDefault();
    alert("handleLearnMore");
  }

  // This function is triggered by a child
  // function in the Login component and
  // handles the login process
  parentHandleLogin = (e) => {
    e.preventDefault();
    this.setState({showLogin: false, showDashboard: true});
  }

  // This function is triggered by a child
  // function in the Login component and
  // handles the signup process
  parentHandleSignup = (e, username, password) => {
    //e.preventDefault();
    this.setState({showSignUp: true});
    //alert("Registration With: Username[" + username + "] Password[" + password + "]");
  }

  parentHandleExitSignup = (e) => {
    e.preventDefault();
    this.setState({showSignUp: false});
  }

  parentHandleSelectEvent = (e) => {
    e.preventDefault();
    this.setState({showDashboard: false, showJudgeEvent: true});
  }

  // Render the Main application
  render() {

    // Styling constants for showing different screens
    const showLogin = this.state.showLogin ? {display:'block'} : {display:'none'};
    const showSignUp = this.state.showSignUp ? {display:'block'} : {display:'none'};
    const showDashboard = this.state.showDashboard ? {display:'block'} : {display:'none'};
    const showJudgeEvent = this.state.showJudgeEvent ? {display:'block'} : {display:'none'};
    const showCandidate = this.state.showCandidate ? {display:'block'} : {display:'none'};

    // Return the app frame (header and background)
    return (
      <div>

        <header className="header">
          <div className="header__container">
            <div className="header__logo-box">
              Matchery
            </div>
            <div
              onClick={(e) => {this.handleMyAccount(e)}}
              className="header__my-account-box">
              My Account
              <ion-icon class="header__down-arrow-icon" name="arrow-dropdown"></ion-icon>
            </div>
          </div>
        </header>

        <div style={showLogin}>
          <Login
            parentHandleLogin={this.parentHandleLogin}
            parentHandleSignup={this.parentHandleSignup}
          />
        </div>

        <div style={showSignUp}>
          <SignUp
            parentHandleLogin={this.parentHandleLogin}
            parentHandleSignup={this.parentHandleSignup}
            parentHandleExitSignup={this.parentHandleExitSignup}
          />
        </div>

        <div style={showDashboard}>
          <Dashboard
            parentHandleSelectEvent={this.parentHandleSelectEvent}
          />
        </div>

        <div style={showJudgeEvent}>
          <JudgeEvent
            parentHandleSelectEvent={this.parentHandleSelectEvent}
          />
        </div>

      </div>
    );
  }
}
export default App;
