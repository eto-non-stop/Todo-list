import React from "react";

import styles from "./styles.module.css";

const ItemStatusFilter = () => {
  return (
    <div className={styles.btn_group}>
      <button type="button" className={styles.btn}>
        All
      </button>
      <button type="button" className={styles.btn}>
        Active
      </button>
      <button type="button" className={styles.btn}>
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
