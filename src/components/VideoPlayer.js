// VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer({ videoUrl }) {
  return <ReactPlayer url={videoUrl} controls={true} width="100%" />;
}

export default VideoPlayer;
