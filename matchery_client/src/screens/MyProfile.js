// IMPORT COMPONENTS
import React, { Component } from 'react';

// COMPONENT CLASS
class MyProfile extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

	render() {
		return (
      <div className="modal__backdrop">
        <div className="modal modal--profile">
          <ion-icon class="modal__close-icon" name="close"></ion-icon>
          <h3 className="heading-secondary u-margin-bottom-sm-md">My Profile</h3>
          <h3 className="heading-tertiary">First Name</h3>
          <p className="paragraph u-margin-bottom-sm-md">William</p>
          <h3 className="heading-tertiary">Last Name</h3>
          <p className="paragraph u-margin-bottom-sm-md">Leung</p>
          <h3 className="heading-tertiary">Email</h3>
          <p className="paragraph u-margin-bottom-sm-md">leungwkw@gmail.com</p>
          <h3 className="heading-tertiary">Username</h3>
          <p className="paragraph u-margin-bottom-sm-md">leungwkw</p>
        </div>
    </div>
		)
	}
}
export default MyProfile;
