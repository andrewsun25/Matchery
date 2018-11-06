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
    this.adminGroupListChild = React.createRef();
    this.state = {
      groups: [], // This will be updated by a reference function from Admin.js
    }
  }

  // Function to set the local state [groups] to its initial value.
  // This is called whenever an admin clicks on an admin event.
  setGroupList = (list) => {
    this.setState({
      groups: list,
    });
    this.adminGroupListChild.current.updateList(list);
  }

  deleteFromList = (e, item) => {
    var tempList = this.state.groups;
    var indexOfItem = tempList.indexOf(item);
    tempList.splice(indexOfItem, 1);
    this.setState({
      groups: tempList,
    });
    this.adminGroupListChild.current.updateList(tempList);
    this.update(tempList);
  }

  updateSearchInput = (e) => {
    var keyword = e.target.value;
    if (keyword.length == 0) {
      this.adminGroupListChild.current.updateList(this.state.groups);
    } else {
      var tempGroups = this.state.groups;
      var sendGroups = [];
      tempGroups.forEach((group) => {
        if (group.toLowerCase().includes(keyword)) {
          sendGroups.push(group);
        }
      });
      this.adminGroupListChild.current.updateList(sendGroups);
    }
  }

  addGroupSuccess = (group) => {
    var tempGroup = this.state.groups;
    tempGroup.push(group);
    this.setState({groups: tempGroup});
    this.adminGroupListChild.current.updateList(tempGroup);
    this.update(tempGroup);
  }

  update = (list) => {
    console.log(list);
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
              onChange={this.updateSearchInput}
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
            ref={this.adminGroupListChild}
            groups={this.state.groups}
            deleteFromList={this.deleteFromList}
          />
				</div>

			</section>

    );
  }
}

export default AdminGroups;
