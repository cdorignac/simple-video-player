import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import './sound.css';

class Sound extends Component {

    handleClickMute = (e) => {
	    e.preventDefault();
	    this.props.onClickMute();
	}

	handleChangeVolume = (value) => {
	    this.props.onChangeVolume(value);
	}

	render() {
		return (
			<div>
			  <div className="sound-mute" onClick={this.handleClickMute}>
			    <FontAwesome name={this.props.volume === 0 ? 'volume-off' :'volume-up'} />
			  </div>
			  <div className="sound-volume" onClick={this.handleClickVolume}>
			  	<Slider
			        value={this.props.volume}
			        min={0}
			        max={1}
				  	step={0.1}
				  	tooltip={false}
			        onChange={this.handleChangeVolume}
			      />
			  </div>
			</div>
		);
	}
}

export default Sound;