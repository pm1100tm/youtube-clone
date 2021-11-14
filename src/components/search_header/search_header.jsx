/** @format */

import styles from './search_header.module.css';
import React from 'react';

const SearchHeader = (props) => {
  return (
    <header className={styles.searchHeader}>
      <div className={styles.logo}>
        <img className={styles.logoImage} src="/images/youtube-logo.png"></img>
        <h1 className={styles.title}>YOUTUBE</h1>
      </div>
      <input className={styles.input} type="search" placeholder="검색.."></input>
      <button className={styles.button}>
        <img className={styles.buttonImage} src="/images/search_bt.svg" alt="search_button"></img>
      </button>
    </header>
  );
};

export default SearchHeader;
