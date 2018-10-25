// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
import './AdminResults.css';

// COMPONENT CLASS
class AdminResults extends React.Component {

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

				<section className="section-generate-and-publish u-margin-bottom-md">
					<button className="btn btn--high-action-hollowed event-admin-custom-width u-margin-left-md">Re-Generate Matches</button>
					<button className="btn btn--high-action event-admin-custom-width u-margin-left-sm">Publish Results</button>
				</section>

				<section className="notifications u-margin-bottom-lg">
					<p className="timestamp u-center-text">Last updated: 2.26pm, 3rd October 2018 (3 hours ago)</p>
					<p className="timestamp u-center-text">Note: newly generated results differ from published results</p>
				</section>

				<section className="section-group u-margin-bottom-lg">

					<div className="area-section-heading-center u-margin-bottom-md">
						<h3 className="heading-tertiary u-center-text">Sensasians</h3>
						<button className="btn-hide u-margin-left-md">Hide</button>
					</div>

					<div className="bar-group-result">
						<div className="bar-group-result__bar bar-group-result__bar--success">Zhi Shen Yong</div>
						<div className="bar-group-result__bar bar-group-result__bar--success">William Leung</div>
					</div>

				</section>

				<section className="section-group u-margin-bottom-lg">

					<div className="area-section-heading-center u-margin-bottom-md">
						<h3 className="heading-tertiary u-center-text">After Dark</h3>
						<button className="btn-hide u-margin-left-md">Hide</button>
					</div>

					<div className="bar-group-result">
						<div className="bar-group-result__bar bar-group-result__bar--success">Shane Blair</div>
						<div className="bar-group-result__bar bar-group-result__bar--success">Andrew Sun</div>
					</div>

				</section>

				<section className="section-ungrouped u-margin-bottom-lg">

					<div className="area-section-heading-center u-margin-bottom-md">
						<h3 className="heading-tertiary u-center-text">Ungrouped Candidates</h3>
						<button className="btn-hide u-margin-left-md">Hide</button>
					</div>

					<div className="bar-group-result">
						<div className="bar-group-result__bar bar-group-result__bar--failure">Jack Reacher</div>
						<div className="bar-group-result__bar bar-group-result__bar--failure">Jane Eyre</div>
					</div>

				</section>

			</div>

    );
  }
}

export default AdminResults;