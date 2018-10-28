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
    this.state = {
      rankingGroup: [
        "Mosaic Whispers",
        "Sensasions",
        "The Amateurs",
        "Aristocats",
      ],
      notGroup: [
        "The Pikers",
        "After Dark",
      ],
      notHasStuffToDisplay: true,
      hasEditedRankingGroup: false,
      hideNot: true,
    }
  }

  broadcastSortedList = (e, list) => {
    console.log(list);
    this.setState({hasEditedRankingGroup: true});
  }

  removeFromRanking = (e, name) => {
    var tempNotGroup = this.state.notGroup;
    tempNotGroup.push(name);
    this.setState({notGroup: tempNotGroup});
    var indexOfUser = this.state.rankingGroup.indexOf(name);
    this.state.rankingGroup.splice(indexOfUser, 1);
    this.setState({hasEditedRankingGroup: true});
    if (this.state.notGroup.length != 0) {
      this.setState({notHasStuffToDisplay: true});
    }
  }
  putBackInRanking = (e, name) => {
    var tempRankingGroup = this.state.rankingGroup;
    tempRankingGroup.push(name);
    this.setState({rankingGroup: tempRankingGroup});
    var indexOfUser = this.state.notGroup.indexOf(name);
    this.state.notGroup.splice(indexOfUser, 1);
    this.setState({hasEditedRankingGroup: true});
    if (this.state.notGroup.length == 0) {
      this.setState({notHasStuffToDisplay: false});
    }
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
              groups={this.state.rankingGroup}
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
              groups={this.state.notGroup}
              putBackInRanking={this.putBackInRanking}
              />
					</div>

				</section>

			</div>

    );
  }
}

export default CandidatePreferences;
