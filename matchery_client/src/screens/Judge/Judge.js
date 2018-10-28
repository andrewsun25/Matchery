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
    this.state = {
      showPreferences: true,
      showResults: false
    }
  }

  // Render the component
  render() {

  	const showPreferences = this.state.showPreferences ? {display:'block'} : {display:'none'};
  	const showResults = this.state.showResults ? {display:'block'} : {display:'none'};

    // Return the component frame
    return (

    	<div className="main-panel">

				<div className="main-panel__header">
					<h2 className="heading-secondary">WashU Acappella Auditions 2018 <span className="main-panel__header--user"> - Sensasians Judge</span></h2>
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
              }}>Results</li>
            </div>
					</ul>

					<div className="main-panel__content">
						<div className="main-panel__content-container">

							<div style={showPreferences}>
			          <JudgePreferences

			          />
			        </div>

			        <div style={showResults}>
			          <JudgeResults

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
