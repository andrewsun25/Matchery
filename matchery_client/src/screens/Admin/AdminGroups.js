// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';

import AdminGroupList from '../AdminGroupList';

// COMPONENT CLASS
class AdminGroups extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      groups: this.props.groups,
    }
  }

  deleteFromList = (e, item) => {
    var indexOfGroup = this.state.groups.indexOf(item);
    this.state.groups.splice(indexOfGroup, 1);
  }


  // Render the component
  render() {

    // Return the component frame
    return (

    	<section className="section-groups">

				<div className="area-search-bar-with-add u-margin-bottom-md">
					<form action="#" className="search-bar__form">
						<input
              type="text"
              className="search-bar"
              placeholder="Search groups"
              required >
            </input>
						<ion-icon class="search-bar__icon" name="search"></ion-icon>
					</form>
					<button
            className="btn btn--action btn--with-icon"
            onClick={(e) => {this.props.showAddGroupModal(e)}}>
						<ion-icon class="btn__left-icon" name="add"></ion-icon>
						Add Group
					</button>
				</div>

				<div className="bar-group draggableList">
					<AdminGroupList
            groups={this.state.groups}
            deleteFromList={this.deleteFromList}
          />
				</div>

			</section>

    );
  }
}

export default AdminGroups;
