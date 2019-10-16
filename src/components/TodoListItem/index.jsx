import React, { Component } from "react";

import styles from "./styles.module.css";

export default class TodoListItem extends Component {
  state = {
    isEdit: false
  };
  onDeleted = evt => {
    evt.stopPropagation();
    this.props.onDeleted();
  };

  onToggleImportant = evt => {
    evt.stopPropagation();
    this.props.onToggleImportant();
  };

  render() {
    const { label, onToggleDone, done, important } = this.props;

    let classNames = styles.todo_list_item;

    if (done) {
      classNames += ` ${styles.done}`;
    }

    if (important) {
      classNames += ` ${styles.important}`;
    }

    return (
      <li className={classNames} onClick={onToggleDone}>
        {this.state.isEdit ? <input /> : label}
        <div className={styles.btn_group}>
          <button className={styles.btn} onClick={this.onToggleImportant}>
            <img src="/important.svg" alt="" />
          </button>
          <button className={styles.btn} onClick={this.onDeleted}>
            <img src="/remove.svg" alt="" />
          </button>
        </div>
      </li>
    );
  }
}
