// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';
import List from '../List';
import NotList from '../NotList';
import NewList from '../NewList';

// COMPONENT CLASS
class JudgePreferences extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.listChild = React.createRef();
    this.newListChild = React.createRef();
    this.notListChild = React.createRef();
    this.state = {
      rankingGroup: [],
      newGroup: [],
      notGroup: [],

      hasEditedRankingGroup: false,
      newHasStuffToDisplay: true,
      notHasStuffToDisplay: true,
      hideNew: true,
      hideNot: true,
    }
  }

  getList = (list) => {
    this.setState({rankingGroup: list});
    this.listChild.current.getList(list);
  }

  getNewList = (list) => {
    this.setState({newGroup: list});
    this.newListChild.current.getList(list);
  }

  getNotList = (list) => {
    this.setState({notGroup: list});
    this.notListChild.current.getList(list);
  }

  broadcastSortedList = (e, list) => {
    // console.log(list);
    this.setState({hasEditedRankingGroup: true});
    this.update(list, this.state.newGroup, this.state.notGroup);
  }

  update = (list, newList, notList) => {
    fetch('/api/account/updateAuditionLists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        auditionName: this.props.groupName,
        list: list,
        newList: newList,
        notList: notList
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {

        }
      });
  }

  removeFromRanking = (e, name) => {
    var tempNotGroup = this.state.notGroup;
    tempNotGroup.push(name);
    this.notListChild.current.getList(tempNotGroup);
    this.setState({notGroup: tempNotGroup});

    var tempList = this.state.rankingGroup;
    var indexOfUser = tempList.indexOf(name);
    tempList.splice(indexOfUser, 1);
    this.setState({hasEditedRankingGroup: true});
    if (tempNotGroup.length != 0) {
      this.setState({notHasStuffToDisplay: true});
    }
    this.listChild.current.getList(tempList);
    this.setState({rankingGroup: tempList,});
    this.update(tempList, this.state.newGroup, tempNotGroup);
  }

  removeFromRankingNew = (e, name) => {
    var tempNotGroup = this.state.notGroup;
    tempNotGroup.push(name);
    this.setState({notGroup: tempNotGroup});
    this.notListChild.current.getList(tempNotGroup);

    var tempNewList = this.state.newGroup;
    var indexOfUser = tempNewList.indexOf(name);
    tempNewList.splice(indexOfUser, 1);
    this.newListChild.current.getList(tempNewList);
    this.setState({newGroup: tempNewList,});
    if (tempNewList.length == 0) {
      this.setState({newHasStuffToDisplay: false});
    }
    if (tempNotGroup.length != 0) {
      this.setState({notHasStuffToDisplay: true});
    }
    this.update(this.state.rankingGroup, tempNewList, tempNotGroup);
  }

  putBackInRanking = (e, name) => {
    var tempRankingGroup = this.state.rankingGroup;
    tempRankingGroup.push(name);
    this.setState({rankingGroup: tempRankingGroup});
    this.listChild.current.getList(tempRankingGroup);

    var tempNotGroup = this.state.notGroup;
    var indexOfUser = tempNotGroup.indexOf(name);
    tempNotGroup.splice(indexOfUser, 1);
    this.setState({hasEditedRankingGroup: true});
    this.notListChild.current.getList(tempNotGroup);
    this.setState({
      notGroup: tempNotGroup,
    });
    this.update(tempRankingGroup, this.state.newGroup, tempNotGroup);
  }
  putBackInRankingNew = (e, name) => {
    var tempRankingGroup = this.state.rankingGroup;
    tempRankingGroup.push(name);
    this.setState({rankingGroup: tempRankingGroup});
    this.listChild.current.getList(tempRankingGroup);

    var tempNewGroup = this.state.newGroup;
    var indexOfUser = tempNewGroup.indexOf(name);
    tempNewGroup.splice(indexOfUser, 1);
    this.newListChild.current.getList(tempNewGroup);
    this.setState({hasEditedRankingGroup: true});
    this.setState({newGroup: tempNewGroup,});
    if (tempNewGroup.length == 0) {
      this.setState({newHasStuffToDisplay: false});
    }
    this.update(tempRankingGroup, tempNewGroup, this.state.notGroup);
  }

  // Render the component
  render() {

    const hasEditedRankingGroup = this.state.hasEditedRankingGroup ? {display:'block'} : {display:'none'};
    const hasNotEditedRankingGroup = this.state.hasEditedRankingGroup ? {display:'none'} : {display:'block'};
    const hideNew = this.state.hideNew ? "Hide" : "Show";
    const hideNot = this.state.hideNot ? "Hide" : "Show";
    const hideNewArray = this.state.hideNew ? {display:'block'} : {display:'none'};
    const hideNotArray = this.state.hideNot ? {display:'block'} : {display:'none'};
    const newHasStuffToDisplay = this.state.newHasStuffToDisplay ? <button className="btn-hide u-margin-left-md" onClick={(e) => {this.setState({hideNew: !this.state.hideNew})}}>{hideNew}</button> : <p></p>;
    const notHasStuffToDisplay = this.state.notHasStuffToDisplay ? <button className="btn-hide u-margin-left-md" onClick={(e) => {this.setState({hideNot: !this.state.hideNot})}}>{hideNot}</button> : <p></p>;

    // Return the component frame
    return (

    	<div>
	    	<section className="section-ranking u-margin-bottom-lg">

					<h3 className="heading-tertiary">Ranking <span className="heading-tertiary--sub"> - drag to rearrange</span></h3>
					<p className="paragraph u-margin-bottom-md">Note: all Sensasions judges can edit this ranking</p>

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

				<section className="section-newly-reg u-margin-bottom-hg">

					<div className="area-section-heading u-margin-bottom-md">
						<h3 className="heading-tertiary">Newly Registered</h3>
						{newHasStuffToDisplay}
					</div>

					<div className="bar-group draggableList" style={hideNewArray}>
						<NewList
              ref={this.newListChild}
              putBackInRanking={this.putBackInRankingNew}
              removeFromRanking={this.removeFromRankingNew}
            />
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

export default JudgePreferences;
