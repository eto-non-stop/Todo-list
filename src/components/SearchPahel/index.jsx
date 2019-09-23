import React from "react";
import styles from "./styles.module.css";

const SearchPanel = () => {
  return (
    <form className={styles.searchForm}>
      <input type="text" placeholder="search" />
      <button className={styles.btn}>Search</button>
    </form>
  );
};

export default SearchPanel;
