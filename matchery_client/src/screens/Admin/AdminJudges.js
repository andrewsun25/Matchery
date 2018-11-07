// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';
import AdminJudgesList from '../AdminJudgesList';

// COMPONENT CLASS
class AdminJudges extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.adminSensasiansGroupListChild = React.createRef();
    this.adminAfterDarkGroupListChild = React.createRef();
    this.state = {
      groupJudges: [],
    }
  }

  setGroupJudgesList = (list) => {
    this.setState({
      groupJudges: list,
    });
    //console.log(dict);
    //this.adminGroupListChild.current.updateList(list);
  }

  // Render the component
  render() {

    const groupsList = this.state.groupJudges.map((group, key) =>
    <section
      key={key}
      className="section-group u-margin-bottom-hg">

      <div className="area-section-heading u-margin-bottom-md">
        <h3 className="heading-tertiary">{group[0]} Judges</h3>
      </div>

        <div className="bar-group u-margin-bottom-md draggableList">
          <AdminJudgesList
            ref={this.adminSensasiansGroupListChild}
            groups={group.slice(1, group.length)}
            groupName={group[0]}
          />
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
	  );

    // Return the component frame
    return (

    	<div>

        {groupsList}

    	</div>

    );
  }
}

export default AdminJudges;
