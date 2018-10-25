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
      
    }
  }

  // Render the component
  render() {

    // Return the component frame
    return (

    	<div>

				<section className="section-matches u-margin-bottom-lg">
					<h3 className="heading-tertiary u-center-text u-margin-bottom-md">Matches</h3>
					<div className="bar-group-result">
						<div className="bar-group-result__bar bar-group-result__bar--success">Zhi Shen Yong</div>
						<div className="bar-group-result__bar bar-group-result__bar--success">William Leung</div>
					</div>
				</section>

				<section className="section-misses u-margin-bottom-lg">
					<h3 className="heading-tertiary u-center-text u-margin-bottom-md">Misses</h3>
					<div className="bar-group-result">
						<div className="bar-group-result__bar bar-group-result__bar--failure">Andrew Sun</div>
						<div className="bar-group-result__bar bar-group-result__bar--failure">Shane Blair</div>
					</div>
				</section>

				<p className="timestamp u-center-text">Last updated: 2.26pm, 3rd October 2018 (3 hours ago)</p>
			
			</div>

    );
  }
}

export default JudgeResults;