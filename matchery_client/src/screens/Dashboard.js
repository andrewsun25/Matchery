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

      <section class="section-dashboard">

				<div class="dashboard-header-row u-margin-bottom-hg">
					<h1 class="heading-primary u-color-white">Welcome, William</h1>
					<button class="btn-create">
						<div class="btn-create__text">
							Create Event
						</div>
						<div class="btn-create__icon-box">
							+
						</div>
					</button>
				</div>

				<div class="dashboard-panel-row">

					<div class="panel">
						<div class="panel__header">
							<ion-icon class="panel__icon" name="time"></ion-icon>
							<div class="panel__header-text">Recently Visited</div>							
						</div>
						<ul class="panel__content">
							<li class="panel__content-item" onClick={(e) => {this.childHandleSelectEvent(e)}}>WashU Acappella Auditions 2018</li>
							<li class="panel__content-item" onClick={(e) => {this.childHandleSelectEvent(e)}}>WashU LNYF Auditions 2018</li>
						</ul>
					</div>

					<div class="panel">
						<div class="panel__header">
							<ion-icon class="panel__icon" name="person"></ion-icon>
							<div class="panel__header-text">Administrator for</div>
						</div>
						<ul class="panel__content">
							<li class="panel__content-item">WashU Acappella Auditions 2018</li>
						</ul>
					</div>

					<div class="panel">
						<div class="panel__header">
							<ion-icon class="panel__icon" name="thumbs-up"></ion-icon>
							<div class="panel__header-text">Judge for</div>
						</div>
						<ul class="panel__content">
							<li class="panel__content-item">WashU LNYF Auditions 2018</li>
							<li class="panel__content-item">Black Anthology Auditions 2018</li>
						</ul>
					</div>

					<div class="panel">
						<div class="panel__header">
							<ion-icon class="panel__icon" name="microphone"></ion-icon>
							<div class="panel__header-text">Candidate for</div>
						</div>
						<ul class="panel__content">
							<li class="panel__content-item">WashU Diwali Auditions 2018</li>
							<li class="panel__content-item">WashU PL4Y Auditions 2018</li>
							<li class="panel__content-item">WashU SOK Auditions 2018</li>
						</ul>
					</div>

				</div>

			</section>
    );
  }
}

export default Dashboard;