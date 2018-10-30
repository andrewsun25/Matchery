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
    e.preventDefault();
    alert("Results re-generated!");
  }

  // Render the component
  render() {

    const hideSensasians = this.state.hideSensasians ? "Hide" : "Show";
    const hideAfterDark = this.state.hideAfterDark ? "Hide" : "Show";
    const hideUngrouped = this.state.hideUngrouped ? "Hide" : "Show";

    const hideSensasiansArray = this.state.hideSensasians ? {display:'block'} : {display:'none'};
    const hideAfterDarkArray = this.state.hideAfterDark ? {display:'block'} : {display:'none'};
    const hideUngroupedArray = this.state.hideUngrouped ? {display:'block'} : {display:'none'};

    const sensasiansHasStuffToDisplay = this.state.sensasiansHasStuffToDisplay ? <button className="btn-hide u-margin-left-md" onClick={(e) => {this.setState({hideSensasians: !this.state.hideSensasians})}}>{hideSensasians}</button> : <p></p>;
    const afterDarkHasStuffToDisplay = this.state.afterDarkHasStuffToDisplay ? <button className="btn-hide u-margin-left-md" onClick={(e) => {this.setState({hideAfterDark: !this.state.hideAfterDark})}}>{hideAfterDark}</button> : <p></p>;
    const ungroupedHasStuffToDisplay = this.state.ungroupedHasStuffToDisplay ? <button className="btn-hide u-margin-left-md" onClick={(e) => {this.setState({hideUngrouped: !this.state.hideUngrouped})}}>{hideUngrouped}</button> : <p></p>;

    // Return the component frame
    return (

    	<div>

				<section className="section-generate-and-publish u-margin-bottom-md">
					<button
            className="btn btn--high-action-hollowed event-admin-custom-width u-margin-left-md"
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
						<h3 className="heading-tertiary u-center-text">Sensasians</h3>
						{sensasiansHasStuffToDisplay}
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
						<h3 className="heading-tertiary u-center-text">After Dark</h3>
						{afterDarkHasStuffToDisplay}
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
						<h3 className="heading-tertiary u-center-text">Ungrouped Candidates</h3>
						{ungroupedHasStuffToDisplay}
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
