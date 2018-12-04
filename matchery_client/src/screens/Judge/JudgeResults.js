// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';

// COMPONENT CLASS
class JudgeResults extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
    	groupResults: [],
    	failedCandidates: []
    }
  }

    regenerateResults = (e) => {
    fetch('/api/match', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName: this.props.eventName
      })
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          let dataArray = JSON.parse(json.data);
          let resultsArray = [];
          let failedCandidates = [];

          for (var groupName in dataArray) {
            if (!dataArray.hasOwnProperty(groupName)) continue;

            if (groupName == this.props.groupName) {
	            resultsArray = dataArray[groupName];
            }
          }
          failedCandidates = failedCandidates.filter((element) => !resultsArray.includes(element));
          resultsArray = resultsArray.map((name, key) => 
				<div className="bar-group-result__bar bar-group-result__bar--success">{name}</div>
            );
          failedCandidates = failedCandidates.map((name, key) =>
          		<div className="bar-group-result__bar bar-group-result__bar--failure">{name}</div>
          	);

          this.setState({
            groupResults: resultsArray,
            failedCandidates: failedCandidates
          })
        }
      });
  }

  // Render the component
  render() {

    // Return the component frame
    return (

    	<div>

				<section className="section-matches u-margin-bottom-lg">
					<h3 className="heading-tertiary u-center-text u-margin-bottom-md">Matches</h3>
					<div className="bar-group-result">
						{this.state.groupResults}
					</div>
				</section>

				<section className="section-misses u-margin-bottom-lg">
					<h3 className="heading-tertiary u-center-text u-margin-bottom-md">Misses</h3>
					<div className="bar-group-result">
						{this.state.failedCandidates}
					</div>
				</section>

				<p className="timestamp u-center-text">Last updated: 2.26pm, 3rd October 2018 (3 hours ago)</p>
			
			</div>

    );
  }
}

export default JudgeResults;