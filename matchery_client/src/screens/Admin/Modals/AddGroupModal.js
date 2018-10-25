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
    	
    }
  }

  // Render the component
  render() {

    // Return the component frame
    return (

    	<div className="modal__backdrop">

        <div className="modal modal--sm">
          <ion-icon class="modal__close-icon" name="close"></ion-icon>
          <h3 className="heading-secondary u-margin-bottom-md-lg">Add Group</h3>

          <form action="#">
              <div className="modal__form-group u-margin-bottom-lg">
                  <input type="text" className="modal__form-input" placeholder="Group Name" required></input>
              </div>
              <div className="modal__submit-area">
              	<button className="modal__form-cancel">Cancel</button>
              	<input type="submit" className="modal__form-submit" value="Add Group"></input>
              </div>
          </form>

      	</div>
  		</div>

    );
  }
}

export default AddGroupModal;