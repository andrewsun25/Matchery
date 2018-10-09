// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
import './Matches.css';

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
    this.props.parentHandleLogin(
      e,
      this.state.username,
      this.state.password
      );
    this.props.parentHandleUserPermission(e);
  }

  // This function calls a parent function
  // in the Main component to handle the
  // signup process
  childHandleSignup = (e) => {
    this.props.parentHandleSignup(e);
  }

  // Render the component
  render() {

    let myMatches;
    if (this.props.matchesList.length > 0) {
      myMatches = <div className="matchesText">
        {this.props.matchesList[0][1]}
        <ul>
          <li>{this.props.matchesList[0][0]}</li>
        </ul>
        <br/>
        {this.props.matchesList[1][1]}
        <ul>
          <li>{this.props.matchesList[1][0]}</li>
        </ul>
        <br/>
        {this.props.matchesList[2][1]}
        <ul>
          <li>{this.props.matchesList[2][0]}</li>
        </ul>
        <br/>
        {this.props.matchesList[3][1]}
        <ul>
          <li>{this.props.matchesList[3][0]}</li>
        </ul>
        <br/>
      </div>;
    } else {
      myMatches = <div>Nothing to see here!</div>
    }

    // Return the component frame
    return (


      <div className="login-panel u-center-text">
        {myMatches}
      </div>

    );
  }
}

export default Login;
