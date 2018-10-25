// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';

// COMPONENT CLASS
class CandidatePreferences extends React.Component {

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

				<section className="section-ranking u-margin-bottom-lg">

					<h3 className="heading-tertiary u-margin-bottom-md">Ranking <span className="heading-tertiary--sub"> - drag to rearrange</span></h3>
					
					<div className="bar-group u-margin-bottom-md">
						<div className="bar-group__bar">
							1. Mosaic Whispers
							<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="close"></ion-icon>
						</div>
						<div className="bar-group__bar">
							2. Sensasions
							<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="close"></ion-icon>
						</div>
						<div className="bar-group__bar">
							3. The Amateurs
							<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="close"></ion-icon>
						</div>
						<div className="bar-group__bar">
							4. Aristocats
							<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="close"></ion-icon>
						</div>
					</div>

					<div className="area-action">
						<button className="btn btn--action u-margin-left-md">Save Preferences</button>
					</div>

				</section>

				<section className="section-not-considering">

					<div className="area-section-heading u-margin-bottom-md">
						<h3 className="heading-tertiary">Not Considering</h3>
						<button className="btn-hide u-margin-left-md">Hide</button>
					</div>

					<div className="bar-group">
						<div className="bar-group__bar">
							The Pikers
							<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="arrow-up"></ion-icon>
						</div>
						<div className="bar-group__bar">
							After Dark
							<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="arrow-up"></ion-icon>
						</div>
					</div>

				</section>

			</div>

    );
  }
}

export default CandidatePreferences;