import React, { Component } from 'react';
import './Main.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Matchery!</h1>
        </header>
        <p className="App-intro">
          What came first, the chicken or the egg?
        </p>
      </div>
    );
  }
}

export default App;
