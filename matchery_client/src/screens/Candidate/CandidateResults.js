// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';

// COMPONENT CLASS
class CandidateResults extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      matchedGroup: "",
      published: false,
      updated: ""
    }
  }

  regenerateResults = (e) => {
    fetch('/api/getResults', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName: this.props.eventName,
        username: localStorage.getItem('username')
      })
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            matchedGroup: json.resultGroup,
            published: json.published,
            updated: json.updated
          });
        }
      });
  }

  // Render the component
  render() {

    const showResults = this.state.published;
    const gotAccepted = this.state.matchedGroup != "";

    const showSuccess = (showResults && gotAccepted) ? { display: 'flex' } : { display: 'none' };
    
    let message = "";
    if (showResults && gotAccepted) {
      message = "You have been matched with...";
    }
    else if (showResults) {
      message = "Sorry, you were matched with any groups.";
    }
    else {
      message = "Results have not been published yet";
    }

    // Return the component frame
    return (

    	<div>
        <section className="section-matches u-margin-bottom-lg">
          <h3 className="heading-bigger-tertiary u-center-text u-margin-bottom-md">{message}</h3>
          <div style={showSuccess} className="bar-group-result">
            <div className="bar-group-result__bar bar-group-result__bar--success">{this.state.matchedGroup}</div>
          </div>
        </section>
        <p className="timestamp u-center-text">Last updated: {this.state.updated}</p>
			</div>

    );
  }
}

export default CandidateResults;