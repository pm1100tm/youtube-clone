/** @format */

import styles from './search_header.module.css';
import React, { memo, useRef } from 'react';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const inputSearchValue = inputRef.current.value;
    onSearch(inputSearchValue);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') handleSearch();
  };

  return (
    <header className={styles.searchHeader}>
      <div className={styles.logo}>
        <img
          className={styles.logoImage}
          alt="youtube-logo empty"
          src="/images/youtube-logo.png"
        ></img>
        <h1 className={styles.title}>YOUTUBE</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="검색.."
        onKeyPress={onKeyPress}
      ></input>
      <button className={styles.button}>
        <img
          className={styles.buttonImage}
          src="/images/search_bt.svg"
          alt="search_button"
          type="submit"
          onClick={onClick}
        ></img>
      </button>
    </header>
  );
});

export default SearchHeader;
