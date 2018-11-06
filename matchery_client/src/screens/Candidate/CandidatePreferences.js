// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';

import List from '../List';
import NotList from '../NotList';

// COMPONENT CLASS
class CandidatePreferences extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.listChild = React.createRef();
    this.notListChild = React.createRef();
    this.state = {
      rankingGroup: [],
      notGroup: [],
      notHasStuffToDisplay: true,
      hasEditedRankingGroup: false,
      hideNot: true,
    }
  }

  // Set local states and forward to List
  getList = (list) => {
    this.setState({rankingGroup: list});
    this.listChild.current.getList(list);
  }

  // Set local states and forward to notList
  getNotList = (list) => {
    this.setState({notGroup: list});
    this.notListChild.current.getList(list);
  }

  broadcastSortedList = (e, list) => {
    this.setState({hasEditedRankingGroup: true});
    // update the original json object
    this.update(list, this.state.notGroup);
  }

  update = (list, notList) => {
    fetch('/api/account/updateCandidateLists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: localStorage.getItem('username'),
        eventName: this.props.eventName,
        list: list,
        notList: notList
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          console.log("Updated!");
        }
      });
  }

  removeFromRanking = (e, name) => {
    // Add group to the "Not Considering" List
    var temp_notList = this.state.notGroup;
    temp_notList.push(name);
    this.notListChild.current.getList(temp_notList);
    this.setState({
      notGroup: temp_notList,
    });
    // Remove group from the "Ranking" List
    var temp_list = this.state.rankingGroup;
    var indexOfUser = temp_list.indexOf(name);
    temp_list.splice(indexOfUser, 1);
    this.listChild.current.getList(temp_list);
    this.setState({
      rankingGroup: temp_list,
    });
    // Update save preferences
    this.setState({hasEditedRankingGroup: true});
    if (this.state.notGroup.length != 0) {
      this.setState({notHasStuffToDisplay: true});
    }
    // Update original json object
    this.update(temp_list, temp_notList);
  }

  putBackInRanking = (e, name) => {
    // Put back into "Ranking" List
    var temp_list = this.state.rankingGroup;
    temp_list.push(name);
    this.listChild.current.getList(temp_list);
    this.setState({
      rankingGroup: temp_list
    });
    // Put back into "Not Considering" List
    var temp_notList = this.state.notGroup;
    var indexOfUser = temp_notList.indexOf(name);
    temp_notList.splice(indexOfUser, 1);
    this.notListChild.current.getList(temp_notList);
    this.setState({
      notGroup: temp_notList,
    });
    // Update save preferences
    this.setState({hasEditedRankingGroup: true});
    if (this.state.notGroup.length == 0) {
      this.setState({notHasStuffToDisplay: false});
    }
    // Update the original json object
    this.update(temp_list, temp_notList);
  }

  // Render the component
  render() {

    const hasEditedRankingGroup = this.state.hasEditedRankingGroup ? {display:'block'} : {display:'none'};
    const hasNotEditedRankingGroup = this.state.hasEditedRankingGroup ? {display:'none'} : {display:'block'};
    const hideNot = this.state.hideNot ? "Hide" : "Show";
    const hideNotArray = this.state.hideNot ? {display:'block'} : {display:'none'};
    const notHasStuffToDisplay = this.state.notHasStuffToDisplay ? <button className="btn-hide u-margin-left-md" onClick={(e) => {this.setState({hideNot: !this.state.hideNot})}}>{hideNot}</button> : <p></p>;

    // Return the component frame
    return (

    	<div>

				<section className="section-ranking u-margin-bottom-lg">

					<h3 className="heading-tertiary u-margin-bottom-md">Ranking <span className="heading-tertiary--sub"> - drag to rearrange</span></h3>

					<div className="bar-group u-margin-bottom-md draggableList">
						<List
              ref={this.listChild}
              broadcastSortedList={this.broadcastSortedList}
              removeFromRanking={this.removeFromRanking}
            />
					</div>

          <div style={hasEditedRankingGroup}>
            <div className="area-action">
              <button
                className="btn btn--notdisabled u-margin-left-md"
                onClick={(e) => {this.setState({hasEditedRankingGroup: false});}}>
                Save Preferences
              </button>
            </div>
          </div>
          <div style={hasNotEditedRankingGroup}>
            <div className="area-action">
              <div className="faint-notif">Preferences Saved</div>
              <button
                className="btn btn--disabled u-margin-left-md">
                Save Preferences
              </button>
            </div>
          </div>

				</section>

				<section className="section-not-considering">

					<div className="area-section-heading u-margin-bottom-md">
						<h3 className="heading-tertiary">Not Considering</h3>
						{notHasStuffToDisplay}
					</div>

					<div className="bar-group draggableList" style={hideNotArray}>
            <NotList
              ref={this.notListChild}
              putBackInRanking={this.putBackInRanking}
              />
					</div>

				</section>

			</div>

    );
  }
}

export default CandidatePreferences;
