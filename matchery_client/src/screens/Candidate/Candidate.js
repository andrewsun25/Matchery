// IMPORT COMPONENTS
import React, { Component } from 'react';
import CandidatePreferences from './CandidatePreferences'; // CandidatePreferences component
import CandidateResults from './CandidateResults'; // CandidateResults component

// IMPORT STYLING
// import './Admin.css';

// COMPONENT CLASS
class Candidate extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.candidatePreferencesChild = React.createRef();
    this.state = {
      eventName: "",
      showPreferences: true,
      showResults: false,
    }
  }

  setEventName = (eventName) => {
    this.setState({
      eventName: eventName,
    });
  }

  // Forwards the list to CandidatePreferences
  getList = (list) => {
    this.candidatePreferencesChild.current.getList(list);
  }

  // Forwards the notList to CandidatePreferences
  getNotList = (list) => {
    this.candidatePreferencesChild.current.getNotList(list);
  }

  // Propage the lists back to Main from Candidate Preferences
  propagate = (list, notList) => {
    this.props.propagate(this.state.eventName, list, notList);
  }

  // Render the component
  render() {

  	const showPreferences = this.state.showPreferences ? {display:'block'} : {display:'none'};
  	const showResults = this.state.showResults ? {display:'block'} : {display:'none'};

    // Return the component frame
    return (

    	<div className="main-panel">

				<div className="main-panel__header">
					<h2 className="heading-secondary">{this.state.eventName} <span className="main-panel__header--user"> - Candidate</span></h2>
				</div>

				<div className="main-panel__nav-and-content">

					<ul className="main-panel__nav">
            <div style={showPreferences}>
              <li
                className="main-panel__nav-item main-panel__nav-item--current"
                onClick={(e) => {
                  this.setState({
                    showPreferences: true,
                    showResults: false,
                  });
                }}>Preferences</li>
              <li
                className="main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showPreferences: false,
                    showResults: true,
                  });
                }}>Results</li>
            </div>
            <div style={showResults}>
              <li
                className="main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showPreferences: true,
                    showResults: false,
                  });
                }}>Preferences</li>
              <li
                className="main-panel__nav-item main-panel__nav-item--current"
                onClick={(e) => {
                  this.setState({
                    showPreferences: false,
                    showResults: true,
                  });
                }}>Results</li>
            </div>
					</ul>

					<div className="main-panel__content">
						<div className="main-panel__content-container">

							<div style={showPreferences}>
			          <CandidatePreferences
                  ref={this.candidatePreferencesChild}
                  eventName={this.state.eventName}
			          />
			        </div>

			        <div style={showResults}>
			          <CandidateResults

			          />
			        </div>

						</div>

					</div>
				</div>
			</div>

    );
  }
}

export default Candidate;
