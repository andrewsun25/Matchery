// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
// import './Admin.css';

// COMPONENT CLASS
class AddCandidateModal extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
    	
    }
  }

  // Render the component
  render() {

    // Return the component frame
    return (

    	<div className="modal__backdrop">
        <div className="modal">
          
          <ion-icon class="modal__close-icon" name="close"></ion-icon>
          <h3 className="heading-secondary u-margin-bottom-sm-md">Candidate Invitation</h3>

          <form action="#">

            <div className="modal__form-group">
              <input type="text" className="modal__form-input" placeholder="Emails or usernames of candidates you'd like to invite..." required></input>
            </div>

            <div className="modal__form-group u-margin-bottom-md">
              <textarea className="modal__form-input modal__form-input--textarea" placeholder="A personal message..."></textarea>
            </div>

            <div className="modal__submit-area">
              <button className="modal__form-cancel">Cancel</button>
              <input type="submit" className="modal__form-submit" value="Add Candidates"></input>
            </div>

          </form>

        </div>

      </div>

    );
  }
}

export default AddCandidateModal;