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
    this.adminGroupListChild = React.createRef();
    this.state = {
      candidates: [],
    }
  }

  setCandidateList = (list) => {
    this.setState({
      candidates: list,
    });
    this.adminGroupListChild.current.updateList(list);
  }

  addCandidateSuccess = (candidate, message) => {
    var tempGroup = this.state.candidates;
    var candidateArray = candidate.replace(/ /g,'').split(',');
    let candidateNoEmail = [];
    candidateArray.forEach((item, key) => {
      if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(item))) {
        candidateNoEmail.push(item);
        candidateArray.splice(key, 1);
      }
    })
    tempGroup.push.apply(tempGroup, candidateNoEmail);
    this.setState({candidates: tempGroup});
    this.adminGroupListChild.current.updateList(tempGroup);
    this.addCandidates(candidateArray, message);
  }

  addCandidates = (list, message) => {
    fetch('/api/account/addCandidates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName: this.props.eventName,
        candidates: list, message
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

  removeCandidate = (removed) => {
    fetch('/api/account/deleteCandidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName: this.props.eventName,
        candidate: removed
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

  confirmDelete = (e, item) => {
    this.props.confirmDelete(e, item);
  }

  deleteFromList = (e, item) => {
    var tempCandidate = this.state.candidates;
    var indexOfGroup = tempCandidate.indexOf(item);
    tempCandidate.splice(indexOfGroup, 1);
    this.setState({
      candidates: tempCandidate,
    });
    this.adminGroupListChild.current.updateList(tempCandidate);
    this.removeCandidate(item);
  }

  updateSearchInput = (e) => {
    var keyword = e.target.value;
    if (keyword.length == 0) {
      this.adminGroupListChild.current.updateList(this.state.candidates);
    } else {
      var tempGroups = this.state.candidates;
      var sendGroups = [];
      tempGroups.forEach((group) => {
        if (group.toLowerCase().includes(keyword)) {
          sendGroups.push(group);
        }
      });
      this.adminGroupListChild.current.updateList(sendGroups);
    }
  }

  // Render the component
  render() {

    // Return the component frame
    return (

    	<section className="section-candidates">

				<div className="area-search-bar-with-add u-margin-bottom-md">
					<form action="#" className="search-bar__form">
						<input
              type="text"
              className="search-bar"
              placeholder="Search candidates"
              onChange={this.updateSearchInput}
              required></input>
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
            ref={this.adminGroupListChild}
            groups={this.state.candidates}
            confirmDelete={this.confirmDelete}
          />
				</div>

			</section>

    );
  }
}

export default AdminCandidates;
