/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import YoutubeNetwork from './service/youtube';

const youtubeNetwork = new YoutubeNetwork('test');
ReactDOM.render(
  <React.StrictMode>
    <App youtubeNetwork={youtubeNetwork} />
  </React.StrictMode>,
  document.getElementById('root')
);
