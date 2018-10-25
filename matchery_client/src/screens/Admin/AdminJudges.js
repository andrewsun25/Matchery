// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';

// COMPONENT CLASS
class AdminJudges extends React.Component {

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
    		<section className="section-group u-margin-bottom-hg">

					<div className="area-section-heading u-margin-bottom-md">
						<h3 className="heading-tertiary">Sensasians Judges</h3>
						<button className="btn-hide u-margin-left-md">Hide</button>
					</div>

					<div className="bar-group u-margin-bottom-md">
						<div className="bar-group__bar">
							Zhi Shen Yong
							<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
						</div>
						<div className="bar-group__bar">
							Andrew Sun
							<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
						</div>
						<div className="bar-group__bar">
							Shane Blair
							<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
						</div>
						<div className="bar-group__bar">
							William Leung
							<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
						</div>
					</div>

					<div className="area-action">
						<button className="btn btn--action btn--with-icon">
							<ion-icon class="btn__left-icon" name="add"></ion-icon>
							Add Judges
						</button>
					</div>

				</section>

				<section className="section-group">

					<div className="area-section-heading u-margin-bottom-md">
						<h3 className="heading-tertiary">After Dark Judges</h3>
						<button className="btn-hide u-margin-left-md">Hide</button>
					</div>
					<div className="bar-group u-margin-bottom-md">
						<div className="bar-group__bar">
							Jack Black
							<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
						</div>
						<div className="bar-group__bar">
							Fanny Rosenberg
							<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
						</div>
						<div className="bar-group__bar">
							Some Guy
							<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
						</div>
					</div>

					<div className="area-action">
						<button className="btn btn--action btn--with-icon">
							<ion-icon class="btn__left-icon" name="add"></ion-icon>
							Add Judges
						</button>
					</div>

				</section>
    	</div>

    );
  }
}

export default AdminJudges;