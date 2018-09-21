import React, { Component } from 'react';
import './Main.css';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showLogin: false,
      showDashboard: false,
    };
    /*
    <div style={myStyle}>
      {this.loginInstance}
    </div>
    */
    this.loginInstance = (
      <div className="loginBox">
        <form>
          <div className="centerRow">
            <input placeholder="Username" className="loginInput" type="text" name="username" />
          </div>
          <div className="centerRow">
            <input placeholder="Password" className="loginInput" type="password" name="password" />
          </div>
          <div className="centerRow">
            <button className="loginButton" onClick={this.handleLogin}>Login</button>
          </div>
          <div className="centerRow">
            <button className="signUpButton" onClick={this.handleSignUp}>Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
  componentDidMount() {
    document.body.style = "background:rgb(145,20,20);";
  }
  handleLogin = (event) => {
    event.preventDefault();
    this.setState({showLogin: false});
  }
  handleSignUp = (event) => {
    event.preventDefault();
    alert("Test!");
  }
  render() {
    const myStyle = this.state.showLogin ? {display:'block'} : {display:'none'};
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
        <div className="candidateBox">
          <div className="candidateBoxHeader">
          </div>
          <div className="candidateBoxBody">
            <div className="candidateSideBar">
            </div>
            <div className="candidateMainSection">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
