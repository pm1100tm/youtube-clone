/** @format */

import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      title="youtube video player"
      className={styles.videoBox}
      id="ytplayer"
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allow="fullscreen"
    ></iframe>
    <h1>{snippet.title}</h1>
    <h1>{snippet.channelTitle}</h1>
    <h1 className={styles.description}>{snippet.description}</h1>
  </section>
);

export default VideoDetail;
