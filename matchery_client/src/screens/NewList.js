// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
import './List.css';

// COMPONENT CLASS
class NewList extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      dragging: undefined,
      list: this.props.groups, // Get from parent
    }
  }


  toggleSomething = (stateToToggle) => {
    this.setState({[stateToToggle]: !this.state[stateToToggle]});
  }

  sort = (list, dragging) => {
    const state = this.state;
    state.list = list;
    state.dragging = dragging;
    this.setState({state});
  }

  // This function is called when the user
  // starts dragging on a list item.
  dragStart = (group) => {
    this.dragged = Number(group.currentTarget.dataset.id); // Read the data-xx attribute in the DOM element
    group.dataTransfer.effectAllowed = 'move'; // Specifies effect allowed for a drag operation
    group.dataTransfer.setData('text/html', null); // Set drag operation's drag data to data and type
  }

  // This function is called when the user drags
  // a group over another group.
  dragOver = (group) => {
    group.preventDefault(); // Prevent page refresh
    const items = this.state.list; // Get list of groups
    const over = group.currentTarget; // Get group currently being overlapped
    const dragging = this.state.dragging;
    const from = isFinite(dragging) ? dragging : this.dragged;
    let to = Number(over.dataset.id);
    items.splice(to, 0, items.splice(from,1)[0]);
    this.sort(items, to);
  }

  // This function is called when the user finishes
  // dragging a group.
  dragEnd = (ev) => {
    this.sort(this.state.list, undefined);
    this.props.broadcastSortedList(ev, this.state.list);
  }

	render() {
		return (
      <div>
        <ul className="columns">
          {
            this.state.list.map((item, i) => {
              const dragging = (i == this.state.dragging) ? "dragging" : "";
              return <li className={dragging}
                data-id={i}
                key={i}>
                <div className="bar-group__bar">
                  {item}
                  <ion-icon
                    class="bar-group__icon bar-group__icon--leftmost"
                    name="arrow-up"
                    onClick={(e) => {this.props.putBackInRanking(e, item)}}>
                  </ion-icon>
                  <ion-icon
                    class="bar-group__icon"
                    name="close"
                    onClick={(e) => {this.props.removeFromRanking(e, item)}}>
                  </ion-icon>
                </div>
              </li>;
            })
          }
        </ul>
      </div>
		)
	}
}
export default NewList;
