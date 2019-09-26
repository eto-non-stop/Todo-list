import React, { Component } from "react";

import styles from "./styles.module.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(state => ({
      done: !state.done
    }));
  };

  onMarkImportant = evt => {
    evt.stopPropagation();
    this.setState({
      important: !this.state.important
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = styles.todo_list_item;

    if (done) {
      classNames += ` ${styles.done}`;
    }

    if (important) {
      classNames += ` ${styles.important}`;
    }

    return (
      <li className={classNames} onClick={this.onLabelClick}>
        {label}
        <div className={styles.btn_group}>
          <button className={styles.btn}>
            <img src="/edit.svg" alt="" />
          </button>
          <button className={styles.btn} onClick={this.onMarkImportant}>
            <img src="/important.svg" alt="" />
          </button>
          <button className={styles.btn}>
            <img src="/remove.svg" alt="" />
          </button>
        </div>
      </li>
    );
  }
}
