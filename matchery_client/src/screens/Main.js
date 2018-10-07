// IMPORT COMPONENTS
import React, { Component } from 'react';
import 'whatwg-fetch';
import Dashboard from './Dashboard'; // Dashboard component
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

  componentDidMount() {
    const token = localStorage.getItem('session');
    if (token) {
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({showLogin: false, showDashboard: true});
          }
        });
    }
  }

  // This function is triggered when a
  // user presses the Learn More button
  handleMyAccount = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('session');
    if (token) {
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            alert("Logged out!");
            this.setState({showLogin: true, showDashboard: false});
          }
        });
    }
  }

  handleUserPermission = (e) => {
    e.preventDefault();

    fetch('/api/account/getEvents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: localStorage.getItem('username')
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          localStorage.setItem('userType', json.role);
        }
      });
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
  parentHandleLogin = (e, username, password) => {
    e.preventDefault();
    // Login request
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        alert(json.message);
        if (json.success) {
          localStorage.setItem('session', json.token);
          localStorage.setItem('username', json.username);
          this.setState({showLogin: false, showDashboard: true});
        }
      });
  }

  // This function is triggered by a child
  // function in the Login component and
  // handles the signup process
  parentHandleSignup = (e) => {
    //e.preventDefault();
    this.setState({showSignUp: true});
  }

  parentHandleSignupSubmit = (e, firstName, lastName, email, username, password) => {
    //Insert in database
    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password
      }),
    }).then(res => res.json())
      .then(json => {
          console.log('json', json);
          alert(json.message);
        });
  }

  parentHandleExitSignup = (e) => {
    e.preventDefault();
    this.setState({showSignUp: false});
  }

  parentHandleSelectEvent = (e) => {
    e.preventDefault();
    //alert("Registration With: Username[" + username + "] Password[" + password + "]");
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
            parentHandleUserPermission = {this.handleUserPermission}
          />
        </div>

        <div style={showSignUp}>
          <SignUp
            parentHandleLogin={this.parentHandleLogin}
            parentHandleSignup={this.parentHandleSignup}
            parentHandleSignupSubmit={this.parentHandleSignupSubmit}
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
