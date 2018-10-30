// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';
import AdminGroupList from '../AdminGroupList';

// COMPONENT CLASS
class AdminJudges extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.adminSensasiansGroupListChild = React.createRef();
    this.adminAfterDarkGroupListChild = React.createRef();
    this.state = {
      sensasiansHasStuffToDisplay: true,
      afterDarkHasStuffToDisplay: true,
      hideSensasians: true,
      hideAfterDark: true,
      sensasiansJudges: this.props.sensasiansJudges,
      afterDarkJudges: this.props.afterDarkJudges,
    }
  }

  deleteFromAfterDarkList = (e, item) => {
    var indexOfGroup = this.state.afterDarkJudges.indexOf(item);
    var tempGroup = this.state.afterDarkJudges;
    tempGroup.splice(indexOfGroup, 1);
    this.adminAfterDarkGroupListChild.current.updateList(tempGroup);
  }

  deleteFromSensasiansList = (e, item) => {
    var indexOfGroup = this.state.sensasiansJudges.indexOf(item);
    var tempGroup = this.state.sensasiansJudges;
    tempGroup.splice(indexOfGroup, 1);
    this.adminSensasiansGroupListChild.current.updateList(tempGroup);
  }

  // Render the component
  render() {

    const hideSensasians = this.state.hideSensasians ? "Hide" : "Show";
    const hideAfterDark = this.state.hideAfterDark ? "Hide" : "Show";
    const hideSensasiansArray = this.state.hideSensasians ? {display:'block'} : {display:'none'};
    const hideAfterDarkArray = this.state.hideAfterDark ? {display:'block'} : {display:'none'};
    const sensasiansHasStuffToDisplay = this.state.sensasiansHasStuffToDisplay ? <button className="btn-hide u-margin-left-md" onClick={(e) => {this.setState({hideSensasians: !this.state.hideSensasians})}}>{hideSensasians}</button> : <p></p>;
    const afterDarkHasStuffToDisplay = this.state.afterDarkHasStuffToDisplay ? <button className="btn-hide u-margin-left-md" onClick={(e) => {this.setState({hideAfterDark: !this.state.hideAfterDark})}}>{hideAfterDark}</button> : <p></p>;

    // Return the component frame
    return (

    	<div>
    		<section className="section-group u-margin-bottom-hg">

					<div className="area-section-heading u-margin-bottom-md">
						<h3 className="heading-tertiary">Sensasians Judges</h3>
						{sensasiansHasStuffToDisplay}
					</div>

          <div style={hideSensasiansArray}>
  					<div className="bar-group u-margin-bottom-md draggableList">
              <AdminGroupList
                ref={this.adminSensasiansGroupListChild}
                groups={this.state.sensasiansJudges}
                deleteFromList={this.deleteFromSensasiansList}
              />
  					</div>
          </div>

					<div className="area-action">
						<button
              className="btn btn--action btn--with-icon"
              onClick={(e) => {this.props.showAddJudgeModal(e)}}>
							<ion-icon class="btn__left-icon" name="add"></ion-icon>
							Add Judges
						</button>
					</div>

				</section>

				<section className="section-group">

					<div className="area-section-heading u-margin-bottom-md">
						<h3 className="heading-tertiary">After Dark Judges</h3>
						{afterDarkHasStuffToDisplay}
					</div>

          <div style={hideAfterDarkArray}>
  					<div className="bar-group u-margin-bottom-md draggableList">
              <AdminGroupList
                ref={this.adminAfterDarkGroupListChild}
                groups={this.state.afterDarkJudges}
                deleteFromList={this.deleteFromAfterDarkList}
              />
  					</div>
          </div>

					<div className="area-action">
						<button
              className="btn btn--action btn--with-icon"
              onClick={(e) => {this.props.showAddJudgeModal(e)}}>
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
