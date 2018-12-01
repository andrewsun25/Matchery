// IMPORT COMPONENTS
import React, { Component } from 'react';
import AdminAdmins from './AdminAdmins'; // AdminAdmins component
import AdminGroups from './AdminGroups'; // AdminGroups component
import AdminJudges from './AdminJudges'; // AdminJudges component
import AdminCandidates from './AdminCandidates'; // AdminCandidates component
import AdminResults from './AdminResults'; // AdminResults component
import AddAdminModal from './Modals/AddAdminModal'; // AddAdminModal component
import AddGroupModal from './Modals/AddGroupModal'; // AddGroupModal component
import AddJudgeModal from './Modals/AddJudgeModal'; // AddJudgeModal component
import AddCandidateModal from './Modals/AddCandidateModal'; // AddCandidateModal component
import DeleteAdminModal from './Modals/DeleteAdminModal'; // DeleteAdminModal component
import DeleteGroupModal from './Modals/DeleteGroupModal'; // DeleteGroupModal component
import DeleteJudgeModal from './Modals/DeleteJudgeModal'; // DeleteJudgeModal component
import DeleteCandidateModal from './Modals/DeleteCandidateModal'; // DeleteCandidateModal component

// IMPORT STYLING
import './Admin.css';

// COMPONENT CLASS
class Admin extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.addAdminChild = React.createRef();
    this.addGroupChild = React.createRef();
    this.addJudgeChild = React.createRef();
    this.addCandidateChild = React.createRef();
    this.showAdminsChild = React.createRef();
    this.showJudgesChild = React.createRef();
    this.showGroupsChild = React.createRef();
    this.showCandidatesChild = React.createRef();
    this.adminResultsChild = React.createRef();

    this.state = {
      eventName: "",

      showAdmins: true,
      showGroups: false,
      showJudges: false,
      showCandidates: false,
      showResults: false,

      showAddAdminModal: false,
      showAddGroupModal: false,
      showAddJudgeModal: false,
      showAddCandidateModal: false,

      showDeleteAdminModal: false,
      showDeleteGroupModal: false,
      showDeleteJudgeModal: false,
      showDeleteCandidateModal: false
    }
  }

  setEventName = (eventName) => {
    this.setState({
      eventName: eventName,
    });
  }

  setAdminList = (list) => {
    this.showAdminsChild.current.setAdminList(list);
  }

  setCandidateList = (list) => {
    this.showCandidatesChild.current.setCandidateList(list);
  }

  setGroupList = (list) => {
    this.showGroupsChild.current.setGroupList(list);
  }

  setGroupJudgesDict = (list) => {
    this.showJudgesChild.current.setGroupJudgesList(list);
  }

  showAddAdminModal = (e) => { this.setState({showAddAdminModal: true}); }
  showAddGroupModal = (e) => { this.setState({showAddGroupModal: true}); }
  showAddJudgeModal = (e, group) => {
    this.addJudgeChild.current.focusGroup(group);
    this.setState({showAddJudgeModal: true});
  }
  showAddCandidateModal = (e) => { this.setState({showAddCandidateModal: true}); }

  closeAddAdminModal = (e) => { this.setState({showAddAdminModal: false}); }
  closeAddGroupModal = (e) => { this.setState({showAddGroupModal: false}); }
  closeAddJudgeModal = (e) => { this.setState({showAddJudgeModal: false}); }
  closeAddCandidateModal = (e) => { this.setState({showAddCandidateModal: false}); }

  // This function is called when the user attempts to add a group.
  addGroupSuccess = (e, group) => {
    e.preventDefault();
    this.setState({
      showAddGroupModal: false,
    });
    this.showGroupsChild.current.addGroupSuccess(group);
    this.addGroupChild.current.resetInput();
  }

  addAdminSuccess = (e, admin) => {
    e.preventDefault();
    this.setState({
      showAddAdminModal: false,
    });
    this.showAdminsChild.current.addAdminSuccess(admin);
    this.addAdminChild.current.resetInput();
  }

  addJudgeSuccess = (e, judges, group) => {
    e.preventDefault();
    this.setState({showAddJudgeModal: false});
    this.addJudgeChild.current.resetInput();
    this.showJudgesChild.current.addAJudge(judges, group);
  }

  // This function is called when the user attempts to add a candidate, or a
  // series of candidates.
  addCandidateSuccess = (e, candidateList) => {
    e.preventDefault();
    this.setState({
      showAddCandidateModal: false,
    });
    this.showCandidatesChild.current.addCandidateSuccess(candidateList);
    this.addCandidateChild.current.resetInput();
  }

  getEventAgain = () => {
    this.props.getEventAgainAdmin(this.state.eventName);
  }

  parentRegenerateResults = () => {
    this.adminResultsChild.current.regenerateResults();
  }

  // Render the component
  render() {

    const showAdmins = this.state.showAdmins ? {display:'block'} : {display:'none'};
  	const showGroups = this.state.showGroups ? {display:'block'} : {display:'none'};
  	const showJudges = this.state.showJudges ? {display:'block'} : {display:'none'};
  	const showCandidates = this.state.showCandidates ? {display:'block'} : {display:'none'};
  	const showResults = this.state.showResults ? {display:'block'} : {display:'none'};

    const showAddAdminModal = this.state.showAddAdminModal ? {display:'block'} : {display:'none'};
  	const showAddGroupModal = this.state.showAddGroupModal ? {display:'block'} : {display:'none'};
  	const showAddJudgeModal = this.state.showAddJudgeModal ? {display:'block'} : {display:'none'};
  	const showAddCandidateModal = this.state.showAddCandidateModal ? {display:'block'} : {display:'none'};

    const showDeleteAdminModal = this.state.showDeleteAdminModal ? {display:'block'} : {display:'none'};
    const showDeleteGroupModal = this.state.showDeleteGroupModal ? {display:'block'} : {display:'none'};
    const showDeleteJudgeModal = this.state.showDeleteJudgeModal ? {display:'block'} : {display:'none'};
    const showDeleteCandidateModal = this.state.showDeleteCandidateModal ? {display:'block'} : {display:'none'};

    // Return the component frame
    return (

    	<div className="main-panel">
				<div className="main-panel__header">
					<h2 className="heading-secondary">{this.state.eventName}<span className="main-panel__header--user"> - Event Admin</span></h2>
				</div>
				<div className="main-panel__nav-and-content">
					<ul className="main-panel__nav">
            <div style={showAdmins}>
              <li className="main-panel__nav-item main-panel__nav-item--current"
                onClick={(e) => {
                  this.setState({
                    showAdmins: true,
                    showGroups: false,
                    showJudges: false,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Admins</li>
              <li className="main-panel__nav-item main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showAdmins: false,
                    showGroups: true,
                    showJudges: false,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Groups</li>
              <li className="main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showAdmins: false,
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
                  showAdmins: false,
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
                  showAdmins: false,
                  showGroups: false,
                  showJudges: false,
                  showCandidates: false,
                  showResults: true,
                });
                this.adminResultsChild.current.regenerateResults();
              }}>Results</li>
            </div>
            <div style={showGroups}>
              <li className="main-panel__nav-item main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showAdmins: true,
                    showGroups: false,
                    showJudges: false,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Admins</li>
              <li className="main-panel__nav-item main-panel__nav-item--current"
                onClick={(e) => {
                  this.setState({
                    showAdmins: false,
                    showGroups: true,
                    showJudges: false,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Groups</li>
              <li className="main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showAdmins: false,
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
                  showAdmins: false,
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
                  showAdmins: false,
                  showGroups: false,
                  showJudges: false,
                  showCandidates: false,
                  showResults: true,
                });
                this.adminResultsChild.current.regenerateResults();
              }}>Results</li>
            </div>
            <div style={showJudges}>
              <li className="main-panel__nav-item main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showAdmins: true,
                    showGroups: false,
                    showJudges: false,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Admins</li>
              <li className="main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showAdmins: false,
                    showGroups: true,
                    showJudges: false,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Groups</li>
              <li className="main-panel__nav-item main-panel__nav-item--current"
                onClick={(e) => {
                  this.setState({
                    showAdmins: false,
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
                  showAdmins: false,
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
                  showAdmins: false,
                  showGroups: false,
                  showJudges: false,
                  showCandidates: false,
                  showResults: true,
                });
                this.adminResultsChild.current.regenerateResults();
              }}>Results</li>
            </div>
            <div style={showCandidates}>
              <li className="main-panel__nav-item main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showAdmins: true,
                    showGroups: false,
                    showJudges: false,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Admins</li>
              <li className="main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showAdmins: false,
                    showGroups: true,
                    showJudges: false,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Groups</li>
              <li className="main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showAdmins: false,
                    showGroups: false,
                    showJudges: true,
                    showCandidates: false,
                    showResults: false,
                  });
              }}>Judges</li>
              <li className="main-panel__nav-item main-panel__nav-item--current"
                onClick={(e) => {
                  this.setState({
                    showAdmins: false,
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
                  showAdmins: false,
                  showGroups: false,
                  showJudges: false,
                  showCandidates: false,
                  showResults: true,
                });
                this.adminResultsChild.current.regenerateResults();
              }}>Results</li>
            </div>
            <div style={showResults}>
            <li className="main-panel__nav-item main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showAdmins: true,
                    showGroups: false,
                    showJudges: false,
                    showCandidates: false,
                    showResults: false,
                  });
            }}>Admins</li>
            <li className="main-panel__nav-item"
              onClick={(e) => {
                this.setState({
                  showAdmins: false,
                  showGroups: true,
                  showJudges: false,
                  showCandidates: false,
                  showResults: false,
                });
            }}>Groups</li>
              <li className="main-panel__nav-item"
                onClick={(e) => {
                  this.setState({
                    showAdmins: false,
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
                  showAdmins: false,
                  showGroups: false,
                  showJudges: false,
                  showCandidates: true,
                  showResults: false,
                });
              }}>Candidates</li>
              <li className="main-panel__nav-item main-panel__nav-item--current"
                onClick={(e) => {
                  this.setState({
                    showAdmins: false,
                    showGroups: false,
                    showJudges: false,
                    showCandidates: false,
                    showResults: true,
                  });
                  this.adminResultsChild.current.regenerateResults();
              }}>Results</li>
            </div>
					</ul>
					<div className="main-panel__content">
						<div className="main-panel__content-container">

              <div style={showAdmins}>
                <AdminAdmins
                  ref={this.showAdminsChild}
                  showAddAdminModal={this.showAddAdminModal}
                  eventName={this.state.eventName}
                />
              </div>

							<div style={showGroups}>
			          <AdminGroups
                  ref={this.showGroupsChild}
                  getEventAgain={this.getEventAgain}
                  showAddGroupModal={this.showAddGroupModal}
                  eventName={this.state.eventName}
			          />
			        </div>

			        <div style={showJudges}>
			          <AdminJudges
                  ref={this.showJudgesChild}
                  showAddJudgeModal={this.showAddJudgeModal}
                  eventName={this.state.eventName}
			          />
			        </div>

			        <div style={showCandidates}>
			          <AdminCandidates
                  ref={this.showCandidatesChild}
                  eventName={this.state.eventName}
                  showAddCandidateModal={this.showAddCandidateModal}
			          />
			        </div>

			        <div style={showResults}>
			          <AdminResults
                  ref={this.adminResultsChild}
                  eventName={this.state.eventName}
			          />
			        </div>

              <div style={showAddAdminModal}>
                <AddAdminModal
                  ref={this.addAdminChild}
                  closeAddAdminModal={this.closeAddAdminModal}
                  addAdminSuccess={this.addAdminSuccess}
                />
              </div>

			        <div style={showAddGroupModal}>
			          <AddGroupModal
                  ref={this.addGroupChild}
                  closeAddGroupModal={this.closeAddGroupModal}
                  addGroupSuccess={this.addGroupSuccess}
			          />
			        </div>

			        <div style={showAddJudgeModal}>
			          <AddJudgeModal
                  ref={this.addJudgeChild}
                  closeAddJudgeModal={this.closeAddJudgeModal}
                  addJudgeSuccess={this.addJudgeSuccess}
			          />
			        </div>

			        <div style={showAddCandidateModal}>
			          <AddCandidateModal
                  ref={this.addCandidateChild}
                  closeAddCandidateModal={this.closeAddCandidateModal}
                  addCandidateSuccess={this.addCandidateSuccess}
			          />
			        </div>

              <div style={showDeleteAdminModal}>
                <DeleteAdminModal
                  
                />
              </div>

              <div style={showDeleteGroupModal}>
                <DeleteGroupModal
                  
                />
              </div>

              <div style={showDeleteJudgeModal}>
                <DeleteJudgeModal
                  
                />
              </div>

              <div style={showDeleteCandidateModal}>
                <DeleteCandidateModal
                  
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
