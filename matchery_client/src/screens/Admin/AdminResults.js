// IMPORT COMPONENTS
import React, { Component } from 'react';

// IMPORT STYLING
import './AdminResults.css';

// COMPONENT CLASS
class AdminResults extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
    this.state = {
      sensasiansHasStuffToDisplay: true,
      afterDarkHasStuffToDisplay: true,
      ungroupedHasStuffToDisplay: true,
      hideSensasians: true,
      hideAfterDark: true,
      hideUngrouped: true,
    }
  }

  publishResults = (e) => {
    e.preventDefault();
    alert("Results published!");
  }

  regenerateResults = (e) => {
    fetch('/api/match', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          let dataString = json.data.replace(/\'/g, '"');
          console.log(JSON.parse(dataString));
        }
      });
  }

  // Render the component
  render() {

    const hideSensasians = this.state.hideSensasians ? "Hide" : "Show";
    const hideAfterDark = this.state.hideAfterDark ? "Hide" : "Show";
    const hideUngrouped = this.state.hideUngrouped ? "Hide" : "Show";

    const hideSensasiansArray = this.state.hideSensasians ? {display:'block'} : {display:'none'};
    const hideAfterDarkArray = this.state.hideAfterDark ? {display:'block'} : {display:'none'};
    const hideUngroupedArray = this.state.hideUngrouped ? {display:'block'} : {display:'none'};

    const sensasiansHasStuffToDisplay = this.state.sensasiansHasStuffToDisplay ? <div className="area-section-heading-center__hide-btn-box"><button className="btn-hide" onClick={(e) => {this.setState({hideSensasians: !this.state.hideSensasians})}}>{hideSensasians}</button></div> : <p></p>;
    const afterDarkHasStuffToDisplay = this.state.afterDarkHasStuffToDisplay ? <div className="area-section-heading-center__hide-btn-box"><button className="btn-hide" onClick={(e) => {this.setState({hideAfterDark: !this.state.hideAfterDark})}}>{hideAfterDark}</button></div> : <p></p>;
    const ungroupedHasStuffToDisplay = this.state.ungroupedHasStuffToDisplay ? <div className="area-section-heading-center__hide-btn-box"><button className="btn-hide" onClick={(e) => {this.setState({hideUngrouped: !this.state.hideUngrouped})}}>{hideUngrouped}</button></div> : <p></p>;

    // Return the component frame
    return (

    	<div>

				<section className="section-generate-and-publish u-margin-bottom-md">
					<button
            className="btn btn--high-action-hollowed event-admin-custom-width"
            onClick={(e) => {this.regenerateResults(e)}}>
            Re-Generate Matches
          </button>
					<button
            className="btn btn--high-action event-admin-custom-width u-margin-left-sm"
            onClick={(e) => {this.publishResults(e)}}>
            Publish Results
          </button>
				</section>

				<section className="notifications u-margin-bottom-lg">
					<p className="timestamp u-center-text">Last updated: 2.26pm, 3rd October 2018 (3 hours ago)</p>
					<p className="timestamp u-center-text">Note: newly generated results differ from published results</p>
				</section>

        <section className="section-group u-margin-bottom-lg">
          <div className="area-section-heading-center u-margin-bottom-md">
            <div className="area-section-heading-center__container">
              <h3 className="heading-tertiary">Sensasians</h3>
              {sensasiansHasStuffToDisplay}
            </div>
          </div>
          <div className="bar-group-result">
            <div style={hideSensasiansArray}>
              <div className="bar-group-result__bar bar-group-result__bar--success">Zhi Shen Yong</div>
              <div className="bar-group-result__bar bar-group-result__bar--success">William Leung</div>
            </div>
          </div>
        </section>
        <section className="section-group u-margin-bottom-lg">
          <div className="area-section-heading-center u-margin-bottom-md">
            <div className="area-section-heading-center__container">
              <h3 className="heading-tertiary">After Dark</h3>
              {afterDarkHasStuffToDisplay}
            </div>
          </div>
          <div className="bar-group-result">
            <div style={hideAfterDarkArray}>
              <div className="bar-group-result__bar bar-group-result__bar--success">Shane Blair</div>
              <div className="bar-group-result__bar bar-group-result__bar--success">Andrew Sun</div>
            </div>
          </div>
        </section>
        <section className="section-ungrouped u-margin-bottom-lg">
          <div className="area-section-heading-center u-margin-bottom-md">
            <div className="area-section-heading-center__container">
              <h3 className="heading-tertiary">Ungrouped Candidates</h3>
              {ungroupedHasStuffToDisplay}
            </div>
          </div>
          <div className="bar-group-result">
            <div style={hideUngroupedArray}>
              <div className="bar-group-result__bar bar-group-result__bar--failure">Jack Reacher</div>
              <div className="bar-group-result__bar bar-group-result__bar--failure">Jane Eyre</div>
            </div>
          </div>
        </section>

			</div>

    );
  }
}

export default AdminResults;
