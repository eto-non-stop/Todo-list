import React, { Component } from "react";

import styles from "./styles.module.css";

export default class SearchPanel extends Component {
  onSearchChange = e => {
    const term = e.target.value;
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <div className={styles.search}>
        <input
          type="text"
          placeholder="type to search"
          className={styles.input_search}
          value={this.props.term}
          onChange={this.onSearchChange}
        />
      </div>
    );
  }
}
