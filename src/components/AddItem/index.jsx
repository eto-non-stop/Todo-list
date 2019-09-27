import React, { Component } from "react";
import styles from "./styles.module.css";

export default class AddInput extends Component {
  render() {
    return (
      <div className={styles.add_input_form}>
        <input
          type="text"
          placeholder="enter here"
          className={styles.add_input}
        />
        <button
          className={styles.btn}
          onClick={() => this.props.onItemAdded("hi")}
        >
          Add
        </button>
      </div>
    );
  }
}
