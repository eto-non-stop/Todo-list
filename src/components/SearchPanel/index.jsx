import React from "react";
import ItemStatusFilter from "../ItemStatusFilter/index";

import styles from "./styles.module.css";

const SearchPanel = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="type to search"
        className={styles.input_search}
      />
      <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;
