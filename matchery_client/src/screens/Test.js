import React, { Component } from 'react';
import './Main.css';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    this.setState({email: event.target.value});
  }
  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.email);
    event.preventDefault();
  }
  render() {
    return (
      <div className="page">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to Matchery!</h1>
        </header>

        <p className="intro">
          What came first, the chicken or the egg?
        </p>

        <form onSubmit={this.handleSubmit}>
          <label>
            You wrote:
            <input type="text" name="name" value={this.state.email} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default App;
