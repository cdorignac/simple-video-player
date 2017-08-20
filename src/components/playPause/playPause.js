import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './playPause.css';

class PlayPause extends Component {

    handleClick = (e) => {
	    e.preventDefault();
	    this.props.onClick()
	}

	render() {
		return (
		  <div className="play-pause" onClick={this.handleClick}>
		    <FontAwesome name={this.props.paused ? 'play-circle-o' :'pause-circle-o'} />
		  </div>
		);
	}
}

export default PlayPause;