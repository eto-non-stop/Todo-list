import React, { Component } from "react";
import ItemStatusFilter from "../ItemStatusFilter/index";

import styles from "./styles.module.css";

export default class SearchPanel extends Component {
  state = {
    term: ""
  };

  onSearchChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <div className={styles.search}>
        <input
          type="text"
          placeholder="type to search"
          className={styles.input_search}
          value={this.state.term}
          onChange={this.onSearchChange}
        />
        <ItemStatusFilter />
      </div>
    );
  }
}
