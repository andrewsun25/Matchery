// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
import './Dashboard.css';

// COMPONENT CLASS
class Dashboard extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
  }

  childHandleSelectEvent = (e) => {
  	this.props.parentHandleSelectEvent(e);
  }

  // Render the component
  render() {

    // Return the component frame
    return (

      <section className="section-dashboard">

				<div className="dashboard-header-row u-margin-bottom-hg">
					<h1 className="heading-primary u-color-white">Welcome, William</h1>
					<button className="btn-create">
						<div className="btn-create__text">
							Create Event
						</div>
						<div className="btn-create__icon-box">
							+
						</div>
					</button>
				</div>

				<div className="dashboard-panel-row">

					<div className="panel">
						<div className="panel__header">
							<ion-icon className="panel__icon" name="time"></ion-icon>
							<div className="panel__header-text">Recently Visited</div>							
						</div>
						<ul className="panel__content">
							<li className="panel__content-item" onClick={(e) => {this.childHandleSelectEvent(e)}}>WashU Acappella Auditions 2018</li>
							<li className="panel__content-item" onClick={(e) => {this.childHandleSelectEvent(e)}}>WashU LNYF Auditions 2018</li>
						</ul>
					</div>

					<div className="panel">
						<div className="panel__header">
							<ion-icon className="panel__icon" name="person"></ion-icon>
							<div className="panel__header-text">Administrator for</div>
						</div>
						<ul className="panel__content">
							<li className="panel__content-item">WashU Acappella Auditions 2018</li>
						</ul>
					</div>

					<div className="panel">
						<div className="panel__header">
							<ion-icon className="panel__icon" name="thumbs-up"></ion-icon>
							<div className="panel__header-text">Judge for</div>
						</div>
						<ul className="panel__content">
							<li className="panel__content-item">WashU LNYF Auditions 2018</li>
							<li className="panel__content-item">Black Anthology Auditions 2018</li>
						</ul>
					</div>

					<div className="panel">
						<div className="panel__header">
							<ion-icon className="panel__icon" name="microphone"></ion-icon>
							<div className="panel__header-text">Candidate for</div>
						</div>
						<ul className="panel__content">
							<li className="panel__content-item">WashU Diwali Auditions 2018</li>
							<li className="panel__content-item">WashU PL4Y Auditions 2018</li>
							<li className="panel__content-item">WashU SOK Auditions 2018</li>
						</ul>
					</div>

				</div>

			</section>
    );
  }
}

export default Dashboard;