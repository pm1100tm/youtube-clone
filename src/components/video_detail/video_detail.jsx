/** @format */

import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.videoBox}
      id="ytplayer"
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameborder="0"
      allowfullscreen
    ></iframe>
    <h1>{snippet.title}</h1>
    <h1>{snippet.channelTitle}</h1>
    <h1 className={styles.description}>{snippet.description}</h1>
  </section>
);

export default VideoDetail;
