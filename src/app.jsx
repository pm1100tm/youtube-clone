/** @format */
import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail'

function App({youtubeNetwork}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    youtubeNetwork.mostPopular()
    .then((videos) => setVideos(videos))
  }, []);

  const search = (inputSearchValue) => {
    youtubeNetwork.searchByInputValue(inputSearchValue)
    .then((videos) => setVideos(videos))
  };

  const selectVideo = (video) => {
    setSelectedVideo(video)
  }

  return (
    <>
      <div className={styles.app}>
        <SearchHeader onSearch={search} />
        <section className={styles.content}>
          { selectedVideo &&
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo} />
            </div>
          }
          <div className={styles.list}>
            <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
