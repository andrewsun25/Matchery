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
    	failedCandidates: [],
      published: false,
      updated: ""
    }
  }

    regenerateResults = (e) => {
      fetch('/api/getResultsJudge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          eventName: this.props.eventName,
          groupName: this.props.groupName
        })
      }).then(res => res.json())
        .then(json => {
          if (json.success) {
            const resultsArray = json.groupResults.map((name) => 
              <div className="bar-group-result__bar bar-group-result__bar--success">{name}</div>
            );
            const failedCandidatesArray = json.failedCandidates.map((name) =>
              <div className="bar-group-result__bar bar-group-result__bar--failure">{name}</div>
            );
            this.setState({
              groupResults: resultsArray,
              failedCandidates: failedCandidatesArray,
              published: json.published,
              updated: json.updated
            });
          }
      });
  }

  // Render the component
  render() {

    const showResults = (this.state.published) ? { display: 'block' } : { display: 'none' }
    const showNoResults = (!this.state.published) ? { display: 'block' } : { display: 'none' }

    // Return the component frame
    return (

    	<div>
        <div style={showResults}>
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
        </div>
        <div style={showNoResults}>
          <h3 className="heading-tertiary u-center-text u-margin-bottom-md">Results have not been published yet</h3>
        </div>
				<p className="timestamp u-center-text">Last updated: {this.state.updated}</p>
			
			</div>

    );
  }
}

export default JudgeResults;