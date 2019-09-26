import React, { Component } from "react";

import styles from "./styles.module.css";

export default class ItemStatusFilter extends Component {
  render() {
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
  }
}
