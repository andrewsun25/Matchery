// IMPORT COMPONENTS
import React, { Component } from 'react';
import List from './List';

// IMPORT STYLING
import './DragCandidate.css';

// COMPONENT CLASS
class Candidate extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = { // Initialize groups
      groups: [ // This is passed down to the List component
        "Mosaic Whispers",
        "Sensasions",
        "The Amateurs",
        "Aristocats"
      ],
    }
  }

  // Render the component
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
              <h2 className="candidateMainSectionTitle">
                Ranking&nbsp;
                <span className="candidateMainSectionTitleSpan">
                  - drag to reaarange
                </span>
              </h2>
              <div className="draggableList">
                <List groups={this.state.groups} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Candidate;
