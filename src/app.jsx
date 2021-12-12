/** @format */
import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({youtubeNetwork}) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtubeNetwork.mostPopular()
    .then((videos) => setVideos(videos))
  }, []);

  const search = (inputSearchValue) => {
    youtubeNetwork.searchByInputValue(inputSearchValue)
    .then((videos) => setVideos(videos))
  };

  return (
    <>
      <div className={styles.app}>
        <SearchHeader onSearch={search} />
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default App;
