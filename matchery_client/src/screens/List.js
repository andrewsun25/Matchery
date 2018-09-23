import React, { Component } from 'react';
import './List.css';

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dragging: undefined,
      list: [
        'Mosaic Whispers',
        'Sensasions',
        'The Amateurs',
        'Aristocats'
      ],
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

  dragStart = (ev) => {
    this.dragged = Number(ev.currentTarget.dataset.id);
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('text/html', null);
  }

  dragOver = (ev) => {
    ev.preventDefault();
    const items = this.state.list;
    const over = ev.currentTarget;
    const dragging = this.state.dragging;
    const from = isFinite(dragging) ? dragging : this.dragged;
    let to = Number(over.dataset.id);
    items.splice(to, 0, items.splice(from,1)[0]);
    this.sort(items, to);
  }
  dragEnd = (ev) => {
    this.sort(this.state.list, undefined);
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
                key={i}
                onClick={() => this.toggleSomething(item)}
                draggable="true"
                onDragStart={this.dragStart}
                onDragOver={this.dragOver}
                onDragEnd={this.dragEnd}>
                {item}
              </li>;
            })
          }
        </ul>
      </div>
		)
	}
}
export default List;
