// IMPORT COMPONENTS
import React, { Component } from 'react';
import JudgePreferences from './JudgePreferences'; // JudgePreferences component
import JudgeResults from './JudgeResults'; // JudgeResults component

// IMPORT STYLING
// import './Admin.css';

// COMPONENT CLASS
class Judge extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.judgeResultsChild = React.createRef();
    this.judgePreferencesChild = React.createRef();
    this.state = {
      showPreferences: true,
      showResults: false,
      eventName: "",
      groupName: "",
    }
  }

  setEventName = (eventName) => {
    this.setState({
      eventName: eventName,
    });
  }

  setGroupName = (groupName) => {
    this.setState({
      groupName: groupName,
    });
  }

  generateResults = () => {
    this.judgeResultsChild.current.regenerateResults();
  }

  // Forwards the list to CandidatePreferences
  getList = (list) => {
    this.judgePreferencesChild.current.getList(list);
  }

  getNewList = (list) => {
    this.judgePreferencesChild.current.getNewList(list);
  }

  // Forwards the notList to CandidatePreferences
  getNotList = (list) => {
    this.judgePreferencesChild.current.getNotList(list);
  }



  // Render the component
  render() {

  	const showPreferences = this.state.showPreferences ? {display:'block'} : {display:'none'};
  	const showResults = this.state.showResults ? {display:'block'} : {display:'none'};

    // Return the component frame
    return (

    	<div className="main-panel">

				<div className="main-panel__header">
					<h2 className="heading-secondary">{this.state.eventName} <span className="main-panel__header--user"> - {this.state.groupName} Judge</span></h2>
				</div>

				<div className="main-panel__nav-and-content">

					<ul className="main-panel__nav">
            <div style={showPreferences}>
              <li
                className="main-panel__nav-item main-panel__nav-item--current"
                onClick={(e) => {
                  this.setState({
                    showPreferences: true,
                    showResults: false,});
                  }}>
                Preferences
              </li>
              <li
                className="main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showPreferences: false,
                    showResults: true,
                  });
                  this.judgeResultsChild.current.regenerateResults()
                }}>Results</li>
            </div>
            <div style={showResults}>
            <li
              className="main-panel__nav-item"
              onClick={(e) => {
                this.setState({
                  showPreferences: true,
                  showResults: false,});
                }}>
              Preferences
            </li>
            <li
              className="main-panel__nav-item main-panel__nav-item--current"
              onClick={(e) => {
                this.setState({
                  showPreferences: false,
                  showResults: true,
                });
                this.judgeResultsChild.current.regenerateResults()
              }}>Results</li>
            </div>
					</ul>

					<div className="main-panel__content">
						<div className="main-panel__content-container">

							<div style={showPreferences}>
			          <JudgePreferences
                  ref={this.judgePreferencesChild}
                  eventName={this.state.eventName}
                  groupName={this.state.groupName}
			          />
			        </div>

			        <div style={showResults}>
			          <JudgeResults
                  ref={this.judgeResultsChild}
                  eventName={this.state.eventName}
                  groupName={this.state.groupName}
			          />
			        </div>

						</div>

					</div>
				</div>
			</div>

    );
  }
}

export default Judge;
