// IMPORT COMPONENTS
import React, { Component } from 'react';

// COMPONENT CLASS
class CreateEvent extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      list: "",
      message: ""
    }
  }

  updateEventName = (e) => {
    var myName = e.target.value;
    this.setState({
      eventName: myName,
    });
  }

  updateList = (e) => {
    var myList = e.target.value;
    this.setState({
      list: myList,
    });
  }

  updateMessage = (e) => {
    var myMessage = e.target.value;
    this.setState({
      message: myMessage,
    });
  }

	render() {
		return (
      <div className="modal__backdrop">
          <div className="modal">
              <ion-icon
                class="modal__close-icon" name="close"
                onClick={(e) => {this.props.closeCreateEvent(e)}}>
              </ion-icon>
              <h3 className="heading-secondary u-margin-bottom-sm-md">Create Event</h3>
              <form action="#">
                  <div className="modal__form-group u-margin-bottom-lg">
                      <input
                        type="text"
                        className="modal__form-input"
                        placeholder="Event Name"
                        onChange={this.updateEventName}
                        required></input>
                  </div>
                  <h3 className="heading-tertiary u-margin-bottom-sm-md">Administrator Invitation</h3>
                  <div className="modal__form-group">
                      <input
                        type="text"
                        className="modal__form-input"
                        placeholder="Emails or usernames of candidates you'd like to invite..."
                        onChange={this.updateList} ></input>
                  </div>
                  <div className="modal__form-group u-margin-bottom-md">
                      <textarea className="modal__form-input modal__form-input--textarea" placeholder="A personal message..." onChange={this.updateMessage}></textarea>
                  </div>
                  <div className="modal__submit-area">
                    <button
                      className="modal__form-cancel"
                      onClick={(e) => {this.props.closeCreateEvent(e)}}>
                      Cancel
                    </button>
                    <input
                      type="submit"
                      className="modal__form-submit"
                      value="Create Event"
                      onClick={(e) => {this.props.submitCreateEvent(e, this.state.eventName, this.state.list, this.state.message)}}>
                    </input>
                  </div>
              </form>
          </div>
      </div>
		)
	}
}
export default CreateEvent;
