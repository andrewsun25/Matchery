// IMPORT COMPONENTS
import React, { Component } from 'react';

// COMPONENT CLASS
class MyProfile extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: localStorage.getItem('username')
    }
  }

  setValues = (e, firstName, lastName, email) => {
    this.setState({
      firstName: firstName,
      lastName: lastName,
      email: email
    });
  }

	render() {
		return (
      <div className="modal__backdrop">
        <div className="modal modal--profile">
          <ion-icon onClick={this.props.closeMyProfile} class="modal__close-icon" name="close"></ion-icon>
          <h3 className="heading-secondary u-margin-bottom-sm-md">My Profile</h3>
          <h3 className="heading-tertiary">First Name</h3>
          <p className="paragraph u-margin-bottom-sm-md">{this.state.firstName}</p>
          <h3 className="heading-tertiary">Last Name</h3>
          <p className="paragraph u-margin-bottom-sm-md">{this.state.lastName}</p>
          <h3 className="heading-tertiary">Email</h3>
          <p className="paragraph u-margin-bottom-sm-md">{this.state.email}</p>
          <h3 className="heading-tertiary">Username</h3>
          <p className="paragraph u-margin-bottom-sm-md">{this.state.username}</p>
        </div>
    </div>
		)
	}
}
export default MyProfile;
