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

  // Render the component
  render() {

    // List events on each card.
  	const administratorEvents = this.props.events['administrator'].map((eventName, key) =>
  		<li className="panel__content-item" key={key} onClick={(e) => {this.props.dashboardToAdmin(e)}}>{eventName}</li>
  	);

  	const judgeEvents = this.props.events['judge'].map((eventName, key) =>
		  <li className="panel__content-item" key={key} onClick={(e) => {this.props.dashboardToJudge(e)}}>{eventName}</li>
	  );
	  const candidateEvents = this.props.events['candidate'].map((eventName, key) =>
      <li className="panel__content-item" key={key} onClick={(e) => {this.props.dashboardToCandidate(e, eventName)}}>{eventName}</li>
	  );

    // Return the component frame
    return (

      <section className="section-dashboard">

				<div className="dashboard-header-row u-margin-bottom-hg">
					<h1 className="heading-primary u-color-white">
            Welcome, {localStorage.getItem('username')}<
          /h1>
					<button className="btn-create">
						<div
              onClick={(e) => {this.props.createEvent(e)}}
              className="btn-create__text">
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
							<ion-icon class="panel__icon" name="time"></ion-icon>
							<div className="panel__header-text">Recently Visited</div>
						</div>
						<ul className="panel__content">
						</ul>
					</div>

					<div className="panel">
						<div className="panel__header">
							<ion-icon class="panel__icon" name="person"></ion-icon>
							<div className="panel__header-text">Administrator for</div>
						</div>
						<ul className="panel__content">
							{administratorEvents}
						</ul>
					</div>

					<div className="panel">
						<div className="panel__header">
							<ion-icon class="panel__icon" name="thumbs-up"></ion-icon>
							<div className="panel__header-text">Judge for</div>
						</div>
						<ul className="panel__content">
							{judgeEvents}
						</ul>
					</div>

					<div className="panel">
						<div className="panel__header">
							<ion-icon class="panel__icon" name="microphone"></ion-icon>
							<div className="panel__header-text">Candidate for</div>
						</div>
						<ul className="panel__content">
							{candidateEvents}
						</ul>
					</div>

				</div>

			</section>
    );
  }
}

export default Dashboard;
