import React, { Component } from 'react';
import './videoPlayer.css';
import PlayPause from '../playPause/playPause';
import FullScreen from '../fullScreen/fullScreen';

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

  handleFullScreen = () => {
    //TODO
  }



  render() {
    return (
      <div className="video-player">
        <video className="video" ref='video'>
            <source src="https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4" type="video/mp4" />
        </video>
        <div className="video-controls">
          <PlayPause paused={this.state.paused} onClick={this.handlePlayPause} />
          <FullScreen isInFulscreen={this.state.isInFulscreen} onClick={this.handleFullScreen} />
        </div>
      </div>
    );
  }
}

export default VideoPlayer;

/* 
play/pause
progress bar 
sound : volume + mute 
full screen 
*/