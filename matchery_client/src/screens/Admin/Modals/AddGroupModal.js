// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';

// COMPONENT CLASS
class AddGroupModal extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    }
  }

  updateInputValue = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  resetInput = () => {
    this.setState({inputValue: ""});
  }

  // Render the component
  render() {

    // Return the component frame
    return (

    	<div className="modal__backdrop">

        <div className="modal modal--sm">
          <ion-icon
            class="modal__close-icon"
            name="close"
            onClick={(e) => {this.props.closeAddGroupModal(e)}}>
          </ion-icon>
          <h3 className="heading-secondary u-margin-bottom-md-lg">Add Group</h3>

          <form action="#">
              <div className="modal__form-group u-margin-bottom-lg">
                  <input
                    type="text"
                    className="modal__form-input"
                    placeholder="Group Name"
                    value={this.state.inputValue}
                    onChange={this.updateInputValue}
                    required>
                  </input>
              </div>
              <div className="modal__submit-area">
              	<button
                  className="modal__form-cancel"
                  onClick={(e) => {this.props.closeAddGroupModal(e)}}>
                  Cancel
                </button>
              	<input
                  type="submit"
                  onClick={(e) => {this.props.addGroupSuccess(e, this.state.inputValue)}}
                  className="modal__form-submit"
                  value="Add Group">
                </input>
              </div>
          </form>

      	</div>
  		</div>

    );
  }
}

export default AddGroupModal;
