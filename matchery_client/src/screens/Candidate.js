import React, { Component } from 'react';
import List from './List';
import './Candidate.css';

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
