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
  componentDidMount() {
    document.body.style = "background:rgb(145,20,20);";
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
        <div className="header">
          <div className="row">
            <button className="headerButton">Learn More</button>
          </div>
          <div className="row">
            <h1 className="headerTitle">Matchery</h1>
          </div>
        </div>
        <div className="content">
          <form>
            <div className="centerRow">
              <input className="usernameClass" type="text" name="username" />
            </div>
            <div className="centerRow">
              <input type="password" name="password" />
            </div>
            <div className="centerRow">
              <input type="submit" value="Submit" />
            </div>
            <div className="centerRow">
              <p>Sign Up</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
