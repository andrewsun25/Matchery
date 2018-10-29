// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';

import AdminGroupList from '../AdminGroupList';

// COMPONENT CLASS
class AdminCandidates extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      candidates: this.props.candidates,
    }
  }

  deleteFromList = (e, item) => {
    var indexOfGroup = this.state.candidates.indexOf(item);
    this.state.candidates.splice(indexOfGroup, 1);
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
					<button
            className="btn btn--action btn--with-icon"
            onClick={(e) => {this.props.showAddCandidateModal(e)}}>
						<ion-icon class="btn__left-icon" name="add"></ion-icon>
						Add Candidates
					</button>
				</div>

				<div className="bar-group draggableList">
					<AdminGroupList
            groups={this.state.candidates}
            deleteFromList={this.deleteFromList}
          />
				</div>

			</section>

    );
  }
}

export default AdminCandidates;
