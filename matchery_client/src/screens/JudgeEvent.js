// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
import './JudgeEvent.css';

// COMPONENT CLASS
class JudgeEvent extends React.Component {

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

      <div class="main-panel">

				<div class="main-panel__header">
					<h2 class="heading-secondary">WashU Acappella Auditions 2018 <span class="main-panel__header--user"> - Sensasians Judge</span></h2>
				</div>

				<div class="main-panel__nav-and-content">

					<ul class="main-panel__nav">
						<li class="main-panel__nav-item main-panel__nav-item--current">Preferences</li>
						<li class="main-panel__nav-item">Matches</li>
					</ul>

					<div class="main-panel__content">
						<div class="main-panel__content-container">

							<section class="section-ranking u-margin-bottom-lg">
								<h3 class="heading-tertiary">Ranking <span class="heading-tertiary--sub"> - drag to rearrange</span></h3>
								<p class="paragraph u-margin-bottom-md">Note: all Sensasions judges can edit this ranking</p>
								<div class="bar-group u-margin-bottom-md">
									<div class="bar-group__bar">
										1. Zhi Shen Yong
										<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="close"></ion-icon>
									</div>
									<div class="bar-group__bar">
										2. Andrew Sun
										<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="close"></ion-icon>
									</div>
									<div class="bar-group__bar">
										3. Shane Blair
										<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="close"></ion-icon>
									</div>
									<div class="bar-group__bar">
										4. William Leung
										<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="close"></ion-icon>
									</div>
								</div>
								<div class="area-action">
									<div class="faint-notif">Preferences Saved</div>
									<button class="btn btn--disabled u-margin-left-md">Save Preferences</button>
									<button class="btn btn--high-action u-margin-left-sm">Generate Matches</button>
								</div>
							</section>

							<section class="section-newly-reg u-margin-bottom-hg">
								<div class="area-section-heading u-margin-bottom-md">
									<h3 class="heading-tertiary">Newly Registered</h3>
									<button class="btn-hide u-margin-left-md">Hide</button>
								</div>
								<div class="bar-group">
									<div class="bar-group__bar">
										John Doe
										<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="arrow-up"></ion-icon>
										<ion-icon class="bar-group__icon" name="close"></ion-icon>
									</div>
									<div class="bar-group__bar">
										Jane Eyre
										<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="arrow-up"></ion-icon>
										<ion-icon class="bar-group__icon" name="close"></ion-icon>
									</div>
								</div>
							</section>

							<section class="section-not-considering">
								<div class="area-section-heading u-margin-bottom-md">
									<h3 class="heading-tertiary">Not Considering</h3>
									<button class="btn-hide u-margin-left-md">Hide</button>
								</div>
								<div class="bar-group">
									<div class="bar-group__bar">...</div>
								</div>
							</section>

						</div>
					</div>
				</div>
			</div>

    );
  }
}

export default JudgeEvent;