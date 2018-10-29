// IMPORT COMPONENTS
import React, { Component } from 'react';
import AdminGroups from './AdminGroups'; // AdminGroups component
import AdminJudges from './AdminJudges'; // AdminJudges component
import AdminCandidates from './AdminCandidates'; // AdminCandidates component
import AdminResults from './AdminResults'; // AdminResults component
import AddGroupModal from './Modals/AddGroupModal'; // AddGroupModal component
import AddJudgeModal from './Modals/AddJudgeModal'; // AddJudgeModal component
import AddCandidateModal from './Modals/AddCandidateModal'; // AddCandidateModal component

// IMPORT STYLING
import './Admin.css';

// COMPONENT CLASS
class Admin extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      groups: [
        'Sensasions',
        'After Dark',
        'The Amateurs',
        'Mosaic Whispers',
      ],

      showGroups: true,
      showJudges: false,
      showCandidates: false,
      showResults: false,

      showAddGroupModal: false,
      showAddJudgeModal: false,
      showAddCandidateModal: false
    }
  }

  showAddGroupModal = (e) => { this.setState({showAddGroupModal: true}); }

  closeAddGroupModal = (e) => { this.setState({showAddGroupModal: false}); }
  addGroupSuccess = (e, group) => {
    e.preventDefault();
    this.setState({showAddGroupModal: false});
    var tempGroup = this.state.groups;
    tempGroup.push(group);
    this.setState({groups: tempGroup, tempGroups: tempGroup});
  }

  // Render the component
  render() {

  	const showGroups = this.state.showGroups ? {display:'block'} : {display:'none'};
  	const showJudges = this.state.showJudges ? {display:'block'} : {display:'none'};
  	const showCandidates = this.state.showCandidates ? {display:'block'} : {display:'none'};
  	const showResults = this.state.showResults ? {display:'block'} : {display:'none'};

  	const showAddGroupModal = this.state.showAddGroupModal ? {display:'block'} : {display:'none'};
  	const showAddJudgeModal = this.state.showAddJudgeModal ? {display:'block'} : {display:'none'};
  	const showAddCandidateModal = this.state.showAddCandidateModal ? {display:'block'} : {display:'none'};

    // Return the component frame
    return (

    	<div className="main-panel">
				<div className="main-panel__header">
					<h2 className="heading-secondary">WashU Acappella Auditions 2018 <span className="main-panel__header--user"> - Event Admin</span></h2>
				</div>
				<div className="main-panel__nav-and-content">
					<ul className="main-panel__nav">
            <div style={showGroups}>
              <li className="main-panel__nav-item main-panel__nav-item--current"
                onClick={(e) => {
                  this.setState({
                    showGroups: true,
                    showJudges: false,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Groups</li>
              <li className="main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showGroups: false,
                    showJudges: true,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Judges</li>
              <li
                className="main-panel__nav-item"
                onClick={(e) => {
                this.setState({
                  showGroups: false,
                  showJudges: false,
                  showCandidates: true,
                  showResults: false,
                });
              }}>Candidates</li>
              <li
                className="main-panel__nav-item"
                onClick={(e) => {
                this.setState({
                  showGroups: false,
                  showJudges: false,
                  showCandidates: false,
                  showResults: true,
                });
              }}>Results</li>
            </div>
            <div style={showJudges}>
              <li className="main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showGroups: true,
                    showJudges: false,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Groups</li>
              <li className="main-panel__nav-item main-panel__nav-item--current"
                onClick={(e) => {
                  this.setState({
                    showGroups: false,
                    showJudges: true,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Judges</li>
              <li
                className="main-panel__nav-item"
                onClick={(e) => {
                this.setState({
                  showGroups: false,
                  showJudges: false,
                  showCandidates: true,
                  showResults: false,
                });
              }}>Candidates</li>
              <li
                className="main-panel__nav-item"
                onClick={(e) => {
                this.setState({
                  showGroups: false,
                  showJudges: false,
                  showCandidates: false,
                  showResults: true,
                });
              }}>Results</li>
            </div>
            <div style={showCandidates}>
              <li className="main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showGroups: true,
                    showJudges: false,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Groups</li>
              <li className="main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showGroups: false,
                    showJudges: true,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Judges</li>
              <li className="main-panel__nav-item main-panel__nav-item--current"
                onClick={(e) => {
                  this.setState({
                    showGroups: false,
                    showJudges: false,
                    showCandidates: true,
                    showResults: false,
                  });
              }}>Candidates</li>
              <li
                className="main-panel__nav-item"
                onClick={(e) => {
                this.setState({
                  showGroups: false,
                  showJudges: false,
                  showCandidates: false,
                  showResults: true,
                });
              }}>Results</li>
            </div>
            <div style={showResults}>
            <li className="main-panel__nav-item"
              onClick={(e) => {
                this.setState({
                  showGroups: true,
                  showJudges: false,
                  showCandidates: false,
                  showResults: false,
                });
            }}>Groups</li>
              <li className="main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showGroups: false,
                    showJudges: true,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Judges</li>
              <li
                className="main-panel__nav-item"
                onClick={(e) => {
                this.setState({
                  showGroups: false,
                  showJudges: false,
                  showCandidates: true,
                  showResults: false,
                });
              }}>Candidates</li>
              <li className="main-panel__nav-item main-panel__nav-item--current"
                onClick={(e) => {
                  this.setState({
                    showGroups: false,
                    showJudges: false,
                    showCandidates: false,
                    showResults: true,
                  });
              }}>Results</li>
            </div>
					</ul>
					<div className="main-panel__content">
						<div className="main-panel__content-container">

							<div style={showGroups}>
			          <AdminGroups
                  showAddGroupModal={this.showAddGroupModal}
                  groups={this.state.groups}
                  updateSearchArray={this.updateSearchArray}
			          />
			        </div>

			        <div style={showJudges}>
			          <AdminJudges

			          />
			        </div>

			        <div style={showCandidates}>
			          <AdminCandidates

			          />
			        </div>

			        <div style={showResults}>
			          <AdminResults

			          />
			        </div>

			        <div style={showAddGroupModal}>
			          <AddGroupModal
                  closeAddGroupModal={this.closeAddGroupModal}
                  addGroupSuccess={this.addGroupSuccess}
			          />
			        </div>

			        <div style={showAddJudgeModal}>
			          <AddJudgeModal

			          />
			        </div>

			        <div style={showAddCandidateModal}>
			          <AddCandidateModal

			          />
			        </div>

						</div>
					</div>
				</div>
			</div>

    );
  }
}

export default Admin;
