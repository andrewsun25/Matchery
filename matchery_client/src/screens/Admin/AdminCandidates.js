// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';

// COMPONENT CLASS
class AdminCandidates extends React.Component {

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

    	<section className="section-candidates">

				<div className="area-search-bar-with-add u-margin-bottom-md">
					<form action="#" className="search-bar__form">
						<input type="text" className="search-bar" placeholder="Search candidates" required></input>
						<ion-icon class="search-bar__icon" name="search"></ion-icon>
					</form>
					<button className="btn btn--action btn--with-icon">
						<ion-icon class="btn__left-icon" name="add"></ion-icon>
						Add Candidates
					</button>
				</div>

				<div className="bar-group">
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

			</section>

    );
  }
}

export default AdminCandidates;