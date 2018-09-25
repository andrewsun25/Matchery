// IMPORT COMPONENTS
import React, { Component } from 'react';
import 'whatwg-fetch';
import Login from './Login'; // Login component
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
      showCandidate: false,
    };
  }

  // This function is run once before any
  // rendering is done
  componentDidMount() {
    document.body.style = "background:rgb(145,20,20);";
  }

  // This function is triggered by a child
  // function in the Login component and
  // handles the login process
  parentHandleLogin = (e) => {
    e.preventDefault();
    this.setState({showLogin: false, showCandidate: true});
  }

  // This function is triggered by a child
  // function in the Login component and
  // handles the signup process
  parentHandleSignup = (e, username, password) => {
    e.preventDefault();
    alert("Registration With: Username[" + username + "] Password[" + password + "]");

    //Insert in database
    fetch('/api/account/signup', {
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
          if (json.success) {
            alert("success!");
          } else {
            alert("failed!");
          }
        });
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

  // Render the Main application
  render() {

    // Styling constants for showing different screens
    const showLogin = this.state.showLogin ? {display:'block'} : {display:'none'};
    const showCandidate = this.state.showCandidate ? {display:'block'} : {display:'none'};

    // Return the app frame (header and background)
    return (
      <div>
        <div className="header">
            <div style={showLogin}>
              <button
                className="headerButton"
                onClick={(e) => {this.handleLearnMore(e)}}>
                Learn More
              </button>
            </div>
            <div style={showCandidate}>
              <button
                className="headerButton"
                onClick={(e) => {this.handleAccountDropDown(e)}}>
                My Account
              </button>
            </div>
            <h1 className="headerTitle">Matchery</h1>
        </div>
        <div style={showLogin}>
          <Login
            parentHandleLogin={this.parentHandleLogin}
            parentHandleSignup={this.parentHandleSignup}
          />
        </div>
        <div style={showCandidate}>
          <Candidate />
        </div>
      </div>
    );
  }
}
export default App;
