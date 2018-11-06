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

	render() {
		return (
      <div class="modal__backdrop">
          <div class="modal">
              <ion-icon
                class="modal__close-icon" name="close"
                onClick={(e) => {this.props.closeCreateEvent(e)}}>
              </ion-icon>
              <h3 class="heading-secondary u-margin-bottom-sm-md">Create Event</h3>
              <form action="#">
                  <div class="modal__form-group u-margin-bottom-lg">
                      <input
                        type="text"
                        class="modal__form-input"
                        placeholder="Event Name"
                        onChange={this.updateEventName}
                        required></input>
                  </div>
                  <h3 class="heading-tertiary u-margin-bottom-sm-md">Administrator Invitation</h3>
                  <div class="modal__form-group">
                      <input
                        type="text"
                        class="modal__form-input"
                        placeholder="Emails or usernames of candidates you'd like to invite..."
                        onChange={this.updateList} ></input>
                  </div>
                  <div class="modal__form-group u-margin-bottom-md">
                      <textarea class="modal__form-input modal__form-input--textarea" placeholder="A personal message..."></textarea>
                  </div>
                  <div class="modal__submit-area">
                    <button
                      class="modal__form-cancel"
                      onClick={(e) => {this.props.closeCreateEvent(e)}}>
                      Cancel
                    </button>
                    <input
                      type="submit"
                      class="modal__form-submit"
                      value="Create Event"
                      onClick={(e) => {this.props.submitCreateEvent(e, this.state.eventName, this.state.list)}}>
                    </input>
                  </div>
              </form>
          </div>
      </div>
		)
	}
}
export default CreateEvent;
