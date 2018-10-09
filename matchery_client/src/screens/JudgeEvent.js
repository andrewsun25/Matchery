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
      matchesList: [],
    }
  }

  childHandleGenerateMatches = (e) => {
  	alert("Generating");
    fetch('/match', {
      method: 'GET',
/*      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
		
      }),*/
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
            this.setState({matchesList: json.data}, () => {
      			this.props.parentHandleGenerateMatches(e, this.state.matchesList);
    		});
        }
      });
    
/*    this.setState({matchesList: [["Zhi", "Mosaic Whispers"], ["Andrew", "Sensasions"], ["Shane","The Amateurs"], ["William", "Aristocats"]] }, () => {
      this.props.parentHandleGenerateMatches(e, this.state.matchesList);
    });*/
  }

  // Render the component
  render() {

    // Return the component frame
    return (

      <div className="main-panel">

				<div className="main-panel__header">
					<h2 className="heading-secondary">WashU Acappella Auditions 2018 <span className="main-panel__header--user"> - Sensasians Judge</span></h2>
				</div>

				<div className="main-panel__nav-and-content">

					<ul className="main-panel__nav">
						<li className="main-panel__nav-item main-panel__nav-item--current">Preferences</li>
						<li className="main-panel__nav-item">Matches</li>
					</ul>

					<div className="main-panel__content">
						<div className="main-panel__content-container">

							<section className="section-ranking u-margin-bottom-lg">
								<h3 className="heading-tertiary">Ranking <span className="heading-tertiary--sub"> - drag to rearrange</span></h3>
								<p className="paragraph u-margin-bottom-md">Note: all Sensasions judges can edit this ranking</p>
								<div className="bar-group u-margin-bottom-md">
									<div className="bar-group__bar">
										1. Zhi Shen Yong
										<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="close"></ion-icon>
									</div>
									<div className="bar-group__bar">
										2. Andrew Sun
										<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="close"></ion-icon>
									</div>
									<div className="bar-group__bar">
										3. Shane Blair
										<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="close"></ion-icon>
									</div>
									<div className="bar-group__bar">
										4. William Leung
										<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="close"></ion-icon>
									</div>
								</div>
								<div className="area-action">
									<div className="faint-notif">Preferences Saved</div>
									<button className="btn btn--disabled u-margin-left-md">Save Preferences</button>
									<button
                    className="btn btn--high-action u-margin-left-sm"
                    onClick={(e) => {this.childHandleGenerateMatches(e)}}>
                    Generate Matches
                  </button>
								</div>
							</section>

							<section className="section-newly-reg u-margin-bottom-hg">
								<div className="area-section-heading u-margin-bottom-md">
									<h3 className="heading-tertiary">Newly Registered</h3>
									<button className="btn-hide u-margin-left-md">Hide</button>
								</div>
								<div className="bar-group">
									<div className="bar-group__bar">
										John Doe
										<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="arrow-up"></ion-icon>
										<ion-icon class="bar-group__icon" name="close"></ion-icon>
									</div>
									<div className="bar-group__bar">
										Jane Eyre
										<ion-icon class="bar-group__icon bar-group__icon--leftmost" name="arrow-up"></ion-icon>
										<ion-icon class="bar-group__icon" name="close"></ion-icon>
									</div>
								</div>
							</section>

							<section className="section-not-considering">
								<div className="area-section-heading u-margin-bottom-md">
									<h3 className="heading-tertiary">Not Considering</h3>
									<button className="btn-hide u-margin-left-md">Hide</button>
								</div>
								<div className="bar-group">
									<div className="bar-group__bar">...</div>
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
