// IMPORT COMPONENTS
import React, { Component } from 'react';

// COMPONENT CLASS
class AdminAdmins extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      admins: [], // This will be updated by a reference function from Admin.js
    }
  }

  // Render the component
  render() {

    // Return the component frame
    return (

    	<section className="section-admins">
        <div className="area-search-bar-with-add u-margin-bottom-md">
          <form action="#" className="search-bar__form">
            <input type="text" className="search-bar" placeholder="Search administrators" required></input>
            <ion-icon class="search-bar__icon" name="search"></ion-icon>
          </form>
          <button className="btn btn--action btn--with-icon"
          onClick={(e) => {this.props.showAddAdminModal(e)}}>
            <ion-icon class="btn__left-icon" name="add"></ion-icon>
            Add Admins
          </button>
        </div>
        <div className="bar-group">
          <div className="bar-group__bar">
            Shane Blair
            <ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
          </div>
          <div className="bar-group__bar">
            Andrew Sun
            <ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
          </div>
          <div className="bar-group__bar">
            Zhi Shen Yong
            <ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
          </div>
          <div className="bar-group__bar">
            William Leung
            <ion-icon class="bar-group__icon bar-group__icon--leftmost" name="trash"></ion-icon>
          </div>
        </div>
      </section>

    );
  }
}

export default AdminAdmins;
