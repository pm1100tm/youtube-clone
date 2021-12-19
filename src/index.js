/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import YoutubeAxios from './service/youtube-axios';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }
});

const youtubeAxios = new YoutubeAxios(httpClient);
ReactDOM.render(
  <React.StrictMode>
    <App youtubeNetwork={youtubeAxios} />
  </React.StrictMode>,
  document.getElementById('root')
);
