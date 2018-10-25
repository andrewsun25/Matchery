// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';

// COMPONENT CLASS
class AdminGroups extends React.Component {

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

    	<section className="section-groups">

				<div className="area-search-bar-with-add u-margin-bottom-md">
					<form action="#" className="search-bar__form">
						<input type="text" className="search-bar" placeholder="Search groups" required></input>
						<ion-icon class="search-bar__icon" name="search"></ion-icon>
					</form>
					<button className="btn btn--action btn--with-icon">
						<ion-icon class="btn__left-icon" name="add"></ion-icon>
						Add Group
					</button>
				</div>

				<div className="bar-group">
					<div className="bar-group__bar">
						Sensasians
						<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
					</div>
					<div className="bar-group__bar">
						After Dark
						<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
					</div>
					<div className="bar-group__bar">
						The Amateurs
						<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
					</div>
					<div className="bar-group__bar">
						Mosaic Whispers
						<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
					</div>
				</div>

			</section>

    );
  }
}

export default AdminGroups;