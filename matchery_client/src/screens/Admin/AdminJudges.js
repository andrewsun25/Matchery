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
    this.state = {
      groupJudges: [],
    }
  }

  addAJudge = (judges, group) => {
    var tempGroup = [];
    var tempGroupJudges = this.state.groupJudges;
    tempGroupJudges.forEach((element) => {
      if (element[0] == group) {
        tempGroup = element.slice(1, element.length);
      }
    });
    var judgeArray = judges.split(',');
    judgeArray = judgeArray.map((el) => {
      return el.trim();
    });
    tempGroup.push.apply(tempGroup, judgeArray);
    var noSpaceGroup = group.replace(/\s/g, '');
    for (const [key, value] of Object.entries(this.refsCollection)) {
      if (key == noSpaceGroup) {
        this.refsCollection[key].updateList(tempGroup);
      }
    }
    /*
      TODO 1: update a group's judge list here from ADDING judges
        group: is the group's name that we want to update
        tempGroup: is the array of judges WITHOUT the 0 index being the name of the group
        !!! if you want the 0 index to be the name of the group, you gotta add it yourself below!
    */
    fetch('/api/account/addJudges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName: this.props.eventName,
        groupName: group,
        judges: judges
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

  propagateDelete = (groupName, removed) => {
    console.log(removed);
    fetch('/api/account/deleteJudge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName: this.props.eventName,
        groupName: groupName,
        judge: removed
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
    /*
      TODO 2: update a group's judge list here from DELETING judges
        groupName: the group's name
        removed: the judge removed
    */
  }

  setGroupJudgesList = (list) => {
    this.setState({
      groupJudges: list,
    });
    //console.log(dict);
    //this.adminGroupListChild.current.updateList(list);
  }

  // Render the component
  refsCollection = {};
  render() {

    // Return the component frame
    return (

    	<div>

        {
          this.state.groupJudges.map((group, key) =>
          <section
            key={key}
            className="section-group u-margin-bottom-hg">

            <div className="area-section-heading u-margin-bottom-md">
              <h3 className="heading-tertiary">{group[0]} Judges</h3>
            </div>

              <div className="bar-group u-margin-bottom-md draggableList">
                <AdminJudgesList
                  groups={group.slice(1, group.length)}
                  groupName={group[0]}
                  propagateDelete={this.propagateDelete}
                  ref={(instance) => {this.refsCollection[group[0].replace(/\s/g, '')] = instance;}}
                />
              </div>

            <div className="area-action">
              <button
                className="btn btn--action btn--with-icon"
                onClick={(e) => {this.props.showAddJudgeModal(e, group[0])}}>
                <ion-icon class="btn__left-icon" name="add"></ion-icon>
                Add Judges
              </button>
            </div>

          </section>
        )
        }

    	</div>

    );
  }
}

export default AdminJudges;
