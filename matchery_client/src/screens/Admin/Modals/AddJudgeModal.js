// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';

// COMPONENT CLASS
class AddJudgeModal extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      group: "",
      message: ""
    }
  }

  focusGroup = (group) => {
    this.setState({
      group: group,
    })
  }

  updateInputValue = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  resetInput = () => {
    this.setState({inputValue: ""});
  }

  updateMessage = (e) => {
    var myMessage = e.target.value;
    this.setState({
      message: myMessage,
    });
  }

  // Render the component
  render() {

    // Return the component frame
    return (

    	<div className="modal__backdrop">

        <div className="modal">

          <ion-icon
            class="modal__close-icon"
            name="close"
            onClick={(e) => {this.props.closeAddJudgeModal(e)}}></ion-icon>
          <h3 className="heading-secondary u-margin-bottom-sm-md">{this.state.group} Judge Invitation</h3>

          <form action="#">

            <div className="modal__form-group">
              <input
                type="text"
                className="modal__form-input"
                placeholder="Emails or usernames of judges you'd like to invite..."
                required
                value={this.state.inputValue}
                onChange={this.updateInputValue}></input>
            </div>

            <div className="modal__form-group u-margin-bottom-md">
              <textarea className="modal__form-input modal__form-input--textarea" placeholder="A personal message..." onChange={this.updateMessage}></textarea>
            </div>

            <div className="modal__submit-area">
              <button
                className="modal__form-cancel"
                onClick={(e) => {this.props.closeAddJudgeModal(e)}}>Cancel</button>
              <input
                type="submit"
                className="modal__form-submit"
                value="Add Judges"
                onClick={(e) => {this.props.addJudgeSuccess(e, this.state.inputValue, this.state.group, this.state.message)}}></input>
            </div>

          </form>

        </div>

      </div>

    );
  }
}

export default AddJudgeModal;
