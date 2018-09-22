import React, { Component } from 'react';
import './List.css';

var lastIndex = 0;
var placeholder = document.createElement("li");
placeholder.className = "placeholder";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props};
  }
  dragStart = (e) => {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.dragged);
  }
  dragEnd = (e) => {
    this.dragged.style.display = 'block';
    this.dragged.parentNode.removeChild(placeholder);

    // update state
    var data = this.state.colors;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if(from < to) to--;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({colors: data});
  }
  dragOver(e) {
    e.preventDefault();
    this.dragged.style.display = "none";
    if(e.target.className === 'placeholder') return;
    this.over = e.target;
    e.target.parentNode.insertBefore(placeholder, e.target);
  }
	render() {
    var listItems = this.state.colors.map((item, i) => {
      lastIndex = i;
      return (
        <li
          data-id={i}
          key={i}
          draggable='true'
          onDragEnd={this.dragEnd}
          onDragStart={this.dragStart}>{item}</li>
      )
     });
		return (
			<ul onDragOver={this.dragOver.bind(this)}>
        {listItems}
        <li
          data-id={lastIndex+1}
          key={lastIndex+1}
          draggable='false'
          className='noHeight'
          onDragEnd={this.dragEnd.bind(this)}
          onDragStart={this.dragStart.bind(this)}></li>
      </ul>
		)
	}
}
export default List;
