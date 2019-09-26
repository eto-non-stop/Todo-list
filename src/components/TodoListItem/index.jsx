import React, { Component } from "react";

import styles from "./styles.module.css";

export default class TodoListItem extends Component {
  state = {
    done: false
  };

  onLabelClick = () => {
    this.setState({
      done: true
    });
  };

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;

    let classNames = styles.todo_list_item;

    if (done) {
      classNames += ` ${styles.done}`;
    }

    const style = {
      color: important ? "rgb(160, 204, 90)" : "rgb(66, 66, 66)",
      fontWeight: important ? "bold" : "normal"
    };

    return (
      <li style={style} className={classNames} onClick={this.onLabelClick}>
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
