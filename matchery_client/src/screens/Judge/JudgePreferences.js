// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';
import List from '../List';

// COMPONENT CLASS
class JudgePreferences extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      rankingGroup: [
        "Zhi Shen Yong",
        "Andrew Sun",
        "Shane Blair",
        "William Leung",
      ],
      newGroup: [
        "John Doe",
        "Jane Eyre",
      ],
      notGroup: [
        "Mahmoud",
      ],
    }
  }

  // Render the component
  render() {

    // Return the component frame
    return (

    	<div>
	    	<section className="section-ranking u-margin-bottom-lg">

					<h3 className="heading-tertiary">Ranking <span className="heading-tertiary--sub"> - drag to rearrange</span></h3>
					<p className="paragraph u-margin-bottom-md">Note: all Sensasions judges can edit this ranking</p>

					<div className="bar-group u-margin-bottom-md draggableList">
						<List groups={this.state.rankingGroup} />
					</div>

					<div className="area-action">
						<div className="faint-notif">Preferences Saved</div>
						<button className="btn btn--disabled u-margin-left-md">Save Preferences</button>
					</div>

				</section>

				<section className="section-newly-reg u-margin-bottom-hg">

					<div className="area-section-heading u-margin-bottom-md">
						<h3 className="heading-tertiary">Newly Registered</h3>
						<button className="btn-hide u-margin-left-md">Hide</button>
					</div>

					<div className="bar-group">
						<div className="bar-group__bar">
							John Doe
							<ion-icon
                class="bar-group__icon bar-group__icon--leftmost"
                name="arrow-up"
                onClick={(e) => {alert("Move up.")}}></ion-icon>
							<ion-icon
                class="bar-group__icon"
                name="close"
                onClick={(e) => {alert("Remove candidate.")}}>
              </ion-icon>
						</div>
						<div className="bar-group__bar">
							Jane Eyre
							<ion-icon
                class="bar-group__icon bar-group__icon--leftmost"
                name="arrow-up"
                onClick={(e) => {alert("Move up.")}}>
              </ion-icon>
							<ion-icon
                class="bar-group__icon"
                name="close"
                onClick={(e) => {alert("Remove candidate.")}}>
              </ion-icon>
						</div>
					</div>

				</section>

				<section className="section-not-considering">

					<div className="area-section-heading u-margin-bottom-md">
						<h3 className="heading-tertiary">Not Considering</h3>
						<button className="btn-hide u-margin-left-md">Show</button>
					</div>

					<div className="bar-group">
						<div className="bar-group__bar">...</div>
					</div>

				</section>
			</div>

    );
  }
}

export default JudgePreferences;
