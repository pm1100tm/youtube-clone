import React from 'react';
import styles from './video_detail.module.css'

const VideoDetail = ({video}) => (
  <div>
    <h1>{video.snippet.title}</h1>
  </div>
);

export default VideoDetail;