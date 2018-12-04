// IMPORT COMPONENTS
import React, { Component } from 'react';

import AdminGroupList from '../AdminGroupList';
// COMPONENT CLASS
class AdminAdmins extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.adminGroupListChild = React.createRef();
    this.state = {
      admins: [], // This will be updated by a reference function from Admin.js
    }
  }

  setAdminList = (list) => {
    this.setState({
      admins: list,
    });
    this.adminGroupListChild.current.updateList(list);
  }

  confirmDelete = (e, item) => {
    this.props.confirmDelete(e, item);
  }

  deleteFromList = (e, item) => {
    var tempList = this.state.admins;
    var indexOfItem = tempList.indexOf(item);
    tempList.splice(indexOfItem, 1);
    this.setState({
      admins: tempList,
    });
    this.adminGroupListChild.current.updateList(tempList);
    this.removeGroup(item);
  }

  updateSearchInput = (e) => {
    var keyword = e.target.value;
    if (keyword.length == 0) {
      this.adminGroupListChild.current.updateList(this.state.admins);
    } else {
      var tempGroups = this.state.admins;
      var sendGroups = [];
      tempGroups.forEach((group) => {
        if (group.toLowerCase().includes(keyword)) {
          sendGroups.push(group);
        }
      });
      this.adminGroupListChild.current.updateList(sendGroups);
    }
  }

  addAdminSuccess = (admin, message) => {
    var tempGroup = this.state.admins;
    var adminArray = admin.split(',');
    adminArray = adminArray.map((el) => {
      return el.trim();
    });
    tempGroup.push.apply(tempGroup, adminArray);
    this.setState({admins: tempGroup});
    this.adminGroupListChild.current.updateList(tempGroup);

    this.addAdmin(adminArray, message);
  }

  addAdmin = (newAdmins, message) => {
    fetch('/api/account/addAdmins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName: this.props.eventName,
        admins: newAdmins,
        message: message
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          console.log("success");
        }
        else {
          console.log(json.message);
        }
      });

  }

  removeGroup = (removed) => {
    fetch('/api/account/deleteAdmin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName: this.props.eventName,
        admin: removed
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          console.log("success");
        }
        else {
          console.log(json.message);
        }
      });

  }

  // Render the component
  render() {

    // Return the component frame
    return (

    	<section className="section-admins">
        <div className="area-search-bar-with-add u-margin-bottom-md">
          <form action="#" className="search-bar__form">
            <input
              type="text"
              className="search-bar"
              placeholder="Search administrators"
              onChange={this.updateSearchInput}
              required>
            </input>
            <ion-icon class="search-bar__icon" name="search"></ion-icon>
          </form>
          <button className="btn btn--action btn--with-icon"
          onClick={(e) => {this.props.showAddAdminModal(e)}}>
            <ion-icon class="btn__left-icon" name="add"></ion-icon>
            Add Admins
          </button>
        </div>
        <div className="bar-group draggableList">
          <AdminGroupList
            ref={this.adminGroupListChild}
            groups={this.state.admins}
            confirmDelete={this.confirmDelete}
          />
        </div>
      </section>

    );
  }
}

export default AdminAdmins;
