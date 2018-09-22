import React, { Component } from 'react';
import List from './List';

class Candidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [
        "Mosaic Whispers",
        "Sensasions",
        "The Amateurs",
        "Aristocats"
      ],
    }
  }
  handleChange = ({target}) => {
    this.setState({[target.name]: target.value});
  }
  childHandleLogin = (e) => {
    this.props.parentHandleLogin(e);
  }
  childHandleSignup = (e) => {
    this.props.parentHandleSignup(e, this.state.username, this.state.password);
  }
  render() {
    return (
      <div className="candidateBox">
        <div className="candidateBoxHeader">
          <h2 className="candidateBoxTitle">WashU Acappella Auditions 2018 - Candidate</h2>
        </div>
        <div className="candidateBoxBody">
          <div className="candidateSideBar">
            <ul className="candidateSideBarList">
              <li>Preferences</li>
              <li>Results</li>
            </ul>
          </div>
          <div className="candidateMainSection">
            <div className="">
              <h2 className="candidateMainSectionTitle">Ranking - drag to reaarange</h2>
              <div className="draggableList">
                <List colors={this.state.groups} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Candidate;
