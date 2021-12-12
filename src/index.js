/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import YoutubeNetwork from './service/youtube';

const youtubeNetwork = new YoutubeNetwork(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App youtubeNetwork={youtubeNetwork} />
  </React.StrictMode>,
  document.getElementById('root')
);
