import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './fullScreen.css';

class FullScreen extends Component {

    handleClick = (e) => {
	    e.preventDefault();
	    this.props.onClick()
	}

	render() {
		return (
		  <div className="full-screen" onClick={this.handleClick}>
		    <FontAwesome name={this.props.paused ? 'expand' : 'compress'} />
		  </div>
		);
	}
}

export default FullScreen;