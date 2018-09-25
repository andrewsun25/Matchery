// IMPORT COMPONENTS
import React, { Component } from 'react';
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

  // This function is run once before any
  // rendering is done
  componentDidMount() {
    // document.body.style = "background:rgb(145,20,20);";
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
    e.preventDefault();
    this.setState({showSignUp: true});
    alert("Registration With: Username[" + username + "] Password[" + password + "]");
  }

  // This function is triggered when a
  // user presses the Learn More button
  handleLearnMore = (e) => {
    e.preventDefault();
    alert("Learn more!");
  }

  // This function is triggered when a
  // user presses the My Account button
  handleAccountDropDown = (e) => {
    e.preventDefault();
    alert("Account Drop Down!");
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
            <div className="header__my-account-box">
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
      // <div>
        // <div className="header">
        //     <div style={showLogin}>
        //       <button
        //         className="headerButton"
        //         onClick={(e) => {this.handleLearnMore(e)}}>
        //         Learn More
        //       </button>
        //     </div>
        //     <div style={showCandidate}>
        //       <button
        //         className="headerButton"
        //         onClick={(e) => {this.handleAccountDropDown(e)}}>
        //         My Account
        //       </button>
        //     </div>
        //     <h1 className="headerTitle">Matchery</h1>
        // </div>
      //   <div style={showLogin}>
      //     <Login
      //       parentHandleLogin={this.parentHandleLogin}
      //       parentHandleSignup={this.parentHandleSignup}
      //     />
      //   </div>
      //   <div style={showCandidate}>
      //     <Candidate />
      //   </div>
      // </div>
    );
  }
}
export default App;
