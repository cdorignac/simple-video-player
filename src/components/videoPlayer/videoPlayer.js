import React, { Component } from 'react';
import './videoPlayer.css';
import PlayPause from '../playPause/playPause';
import Sound from '../sound/sound';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      volume: 1,
      isInFulscreen: false,
      time: 0
    };
  }

  handlePlayPause = () => {
    if(this.state.paused){
      this.refs.video.play();
      this.setState({
        paused: false
      });

    }else{
      this.refs.video.pause();
      this.setState({
        paused: true
      });
    }
  }

  handleMute = () => {
    if(this.state.volume === 0){
      this.refs.video.volume = 1;
    }else {
      this.refs.video.volume = 0;
    }

    this.setState({
      volume: this.refs.video.volume
    });
  }

  handleVolume = (volume) => {
    this.refs.video.volume = volume;
    this.setState({
      volume: volume
    });
  }



  render() {
    return (
      <div className="video-player">
        <video className="video" ref='video'>
            <source src="https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4" type="video/mp4" />
        </video>
        <div className="video-controls">
          <PlayPause paused={this.state.paused} onClick={this.handlePlayPause} />
          <Sound volume={this.state.volume} onClickMute={this.handleMute}  onChangeVolume={this.handleVolume}/>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;