import React, { Component } from "react";

import styles from "./styles.module.css";

export default class TodoListItem extends Component {
  render() {
    const { label, important = false } = this.props;

    const style = {
      color: important ? "rgb(160, 204, 90)" : "black",
      fontWeight: important ? "bold" : "normal"
    };

    return (
      <li style={style} className={styles.todo_list_item}>
        {label}
        <div className={styles.btn_group}>
          <button className={styles.btn}>
            <img src="/edit.svg" alt="" />
          </button>
          <button className={styles.btn}>
            <img src="/danger-symbol.svg" alt="" />
          </button>
          <button className={styles.btn}>
            <img src="/remove.svg" alt="" />
          </button>
        </div>
      </li>
    );
  }
}
