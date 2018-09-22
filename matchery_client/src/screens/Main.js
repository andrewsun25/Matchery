// IMPORT COMPONENTS
import React, { Component } from 'react';
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
    alert("Sign up attempted with: " + username + " " + password);
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
            <button className="headerButton">Learn More</button>
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
