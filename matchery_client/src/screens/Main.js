import React, { Component } from 'react';
import List from './List';
import Login from './Login';
import './Main.css';
import './Candidate.css';
import './Login.css';
import logo from './logo.svg';

function handleLogin(event, value) {
  event.preventDefault();
  this.setState({showLogin: value});
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      showCandidate: false,
      groups: [
        "Mosaic Whispers",
        "Sensasions",
        "The Amateurs",
        "Aristocats"
      ],
    };
  }
  componentDidMount() {
    document.body.style = "background:rgb(145,20,20);";
  }
  parentHandleLogin = (e) => {
    e.preventDefault();
    this.setState({showLogin: false});
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
      </div>
    );
  }
}

export default App;
