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
      matchedGroup: ""
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
          let dataArray = JSON.parse(json.data.replace(/\'/g, '"'));
          let resultGroup = "";

          for (var groupName in dataArray) {
            if (!dataArray.hasOwnProperty(groupName)) continue;

            dataArray[groupName].forEach((candidate) => {
              if (candidate == localStorage.getItem('username')) {
                resultGroup = groupName;
              }
            });
          }

          console.log(resultGroup);
          if (resultGroup != "") {
            this.setState({
              matchedGroup: resultGroup
            })
          }
/*          resultsArray = resultsArray.map((name, key) => 
        <div className="bar-group-result__bar bar-group-result__bar--success">{name}</div>
            );*/

        }
      });
  }

  // Render the component
  render() {

    // Return the component frame
    return (

    	<div>

				<section className="section-matches u-margin-bottom-lg">
						<h3 className="heading-bigger-tertiary u-center-text u-margin-bottom-md">You have been matched with...</h3>
						<div className="bar-group-result">
							<div className="bar-group-result__bar bar-group-result__bar--success">{this.state.matchedGroup}</div>
						</div>
					</section>
					<p className="timestamp u-center-text">Last updated: 2.26pm, 3rd October 2018 (3 hours ago)</p>
				
			</div>

    );
  }
}

export default CandidateResults;