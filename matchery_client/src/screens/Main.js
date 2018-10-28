// IMPORT COMPONENTS
import React, { Component } from 'react';
import 'whatwg-fetch';
import Dashboard from './Dashboard'; // Dashboard component
import Login from './Login'; // Login component
import SignUp from './SignUp'; // SignUp component
import Matches from './Matches';
import Admin from './Admin/Admin'; // Admin component
import Judge from './Judge/Judge'; // Judge component
import Candidate from './Candidate/Candidate'; // Candidate component

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
      // showCandidate: false,
      // showMatches: false,
      // showAdministrator: false,
      // showJudge: false,
      showCandidateRole: false,
      roles: {
        'Administrator' : false,
        'Judge' : false,
        'Candidate' : false
      },
      events: {
        'Administrator' : [],
        'Judge' : [],
        'Candidate' : []
      },
      matchesList: [],

      showAdmin: false,
      showJudge: false,
      showCandidate: false,
      showBackButton: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('session');
    if (token) {
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.parentHandleUserPermission();
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
            this.setState({
              showLogin: true,
              showDashboard: false,
              roles: {
                'Administrator' : false,
                'Judge' : false,
                'Candidate' : false
              },
              events: {
                'Administrator' : [],
                'Judge' : [],
                'Candidate' : []
              }
            });
          }
        });
    }
  }

  parentHandleUserPermission() {
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
          const eventRole = json.eventRoles;
          let counter = 0;
          eventRole.forEach((event) => {
            this.state.roles[event.role] = true;
            this.state.events[event.role][counter] = event.eventName;
          });
          this.setState({
            showLogin: false,
            showDashboard: true,
            roles: {
              'Administrator' : true,
              'Judge' : true,
              'Candidate' : true
            },
            events: {
              'Administrator': ['WashU Acappella Auditions 2018'],
              'Judge': ['WashU LNYF Auditions 2018'],
              'Candidate': ['WashU New Chancellor Auditions 2018'],
            },
          });
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
          this.parentHandleUserPermission(e);
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

  dashboardToRole = (e) => {
    alert("Ping!");
  }

  dashboardToAdmin = (e) => {
    alert("Admin");
  }
  dashboardToJudge = (e) => {
    alert("Judge");
  }
  dashboardToCandidate = (e) => {
    alert("Can");
  }

  goToDashBoard = (e) => {
    this.setState({showDashboard: true, showJudge: false, showCandidate: false});
  }

  parentHandleGenerateMatches = (e, childList) => {
    e.preventDefault();
    this.setState({showDashboard: false, showJudge: false, showCandidate: false, showMatches: true, matchesList: childList});
  }

  // Render the Main application
  render() {

    // Styling constants for showing different screens
    const showLogin = this.state.showLogin ? {display:'block'} : {display:'none'};
    const showSignUp = this.state.showSignUp ? {display:'block'} : {display:'none'};
    const showDashboard = this.state.showDashboard ? {display:'block'} : {display:'none'};
    const showAdmin = this.state.showAdmin ? {display:'block'} : {display:'none'};
    const showJudge = this.state.showJudge ? {display:'block'} : {display:'none'};
    const showCandidate = this.state.showCandidate ? {display:'block'} : {display:'none'};

    const loggedIn = (this.state.showLogin || this.state.showSignUp) ? {display:'none'} : {display:'block'};
    const notInDashboardButLoggedIn = (!this.state.showLogin && !this.state.showSignUp && !this.state.showDashboard) ? {display:'block'} : {display: 'none'};
    const inDashboardOrNotLoggedIn = (this.state.showLogin || this.state.showSignUp || this.state.showDashboard) ? {display:'block'} : {display: 'none'};
    const showMatches = this.state.showMatches ? {display:'block'} : {display:'none'};
    const showBackButton = this.state.showBackButton ? {display:'block'} : {display:'none'};
    // TODO: make the Matchery logo clickable

    // Return the app frame (header and background)
    return (
      <div>

        <header className="header">
          <div className="header__container">
            <div
              className="header__logo-box-clickable"
              style={notInDashboardButLoggedIn}
              onClick={(e) => {this.goToDashBoard(e)}}>
              Matchery
            </div>
            <div
              className="header__logo-box"
              style={inDashboardOrNotLoggedIn}>
              Matchery
            </div>
            <div style={loggedIn}
              onClick={(e) => {this.handleMyAccount(e)}}
              className="header__my-account-box">
              My Account
              <ion-icon class="header__down-arrow-icon" name="arrow-dropdown"></ion-icon>
            </div>
          </div>
        </header>

        <div style={showBackButton} onClick={(e) => {this.setState({
          showBackButton: false,
          showDashboard: true,
          showJudge: false,
          showAdmin: false,
          showMatches: false,
        })}}>
          <div class="container-btn-back">
            <button class="btn-back">
              <ion-icon class="btn-back__icon" name="arrow-dropleft"></ion-icon>
              Back
            </button>
          </div>
        </div>

        <div style={showLogin}>
          <Login
            parentHandleLogin={this.parentHandleLogin}
            parentHandleSignup={this.parentHandleSignup}
            parentHandleUserPermission = {this.parentHandleUserPermission}
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
            dashboardToRole={this.dashboardToRole}
            dashboardToAdmin={this.dashboardToAdmin}
            dashboardToJudge={this.dashboardToJudge}
            dashboardToCandidate={this.dashboardToCandidate}
            roles={this.state.roles}
            events={this.state.events}
          />
        </div>

        <div style={showAdmin}>
          <Admin

          />
        </div>

        <div style={showJudge}>
          <Judge

          />
        </div>

        <div style={showCandidate}>
          <Candidate

          />
        </div>

        <div style={showMatches}>
          <Matches matchesList={this.state.matchesList}/>
        </div>

      </div>
    );
  }
}
export default App;
