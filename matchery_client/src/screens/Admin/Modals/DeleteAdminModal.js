// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';

// COMPONENT CLASS
class DeleteAdminModal extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    }
  }

  setInputValue = (e, item) => {
    this.setState({
      inputValue: item
    });
  }

  // Render the component
  render() {

    // Return the component frame
    return (

    	<div className="modal__backdrop">
        <div className="modal modal--sm">
          <ion-icon class="modal__close-icon" name="close" onClick={(e) => {this.props.closeDeleteModal(e)}}></ion-icon>
          <h3 className="heading-secondary u-margin-bottom-md-lg">Remove Admin</h3>
          <form>
            <p className="paragraph u-margin-bottom-hg">Are you sure you want to remove this administrator?</p>
            <div className="modal__submit-area">
              <button className="modal__form-cancel" onClick={(e) => {this.props.closeDeleteModal(e)}}>Cancel</button>
              <input type="submit" className="modal__form-delete" value="Remove" onClick={(e) => {this.props.delete(e, this.state.inputValue)}}></input>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

export default DeleteAdminModal;
