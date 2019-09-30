import React, { Component } from "react";

import styles from "./styles.module.css";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" }
  ];

  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const className = `${styles.btn} ${isActive ? styles.active : ""}`;

      return (
        <button
          type="button"
          className={className}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className={styles.btn_group}>{buttons}</div>;
  }
}
