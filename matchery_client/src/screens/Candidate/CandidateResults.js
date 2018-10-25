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
      
    }
  }

  // Render the component
  render() {

    // Return the component frame
    return (

    	<div>

				<section className="section-matches u-margin-bottom-lg">
						<h3 className="heading-bigger-tertiary u-center-text u-margin-bottom-md">You have been matched with...</h3>
						<div className="bar-group-result">
							<div className="bar-group-result__bar bar-group-result__bar--success">Sensasians</div>
						</div>
					</section>
					<p className="timestamp u-center-text">Last updated: 2.26pm, 3rd October 2018 (3 hours ago)</p>
				
			</div>

    );
  }
}

export default CandidateResults;