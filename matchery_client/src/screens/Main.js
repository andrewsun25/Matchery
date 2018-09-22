import React, { Component } from 'react';
import Login from './Login'; // Login component
import Candidate from './Candidate';

import './Main.css'; // Header and background styling
import './Candidate.css';
import './Login.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      showCandidate: false,
    };
  }
  componentDidMount() {
    document.body.style = "background:rgb(145,20,20);";
  }
  parentHandleLogin = (e) => {
    e.preventDefault();
    this.setState({showLogin: false, showCandidate: true});
  }
  parentHandleSignup = (e, username, password) => {
    e.preventDefault();
    alert("Sign up attempted with: " + username + " " + password);
  }
  render() {
    const showLogin = this.state.showLogin ? {display:'block'} : {display:'none'};
    const showCandidate = this.state.showCandidate ? {display:'block'} : {display:'none'};
    return (
      <div className="page">
        <div className="header">
          <div className="row">
            <button className="headerButton">Learn More</button>
          </div>
          <div className="row">
            <h1 className="headerTitle">Matchery</h1>
          </div>
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
