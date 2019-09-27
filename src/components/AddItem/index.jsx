import React, { Component } from "react";
import styles from "./styles.module.css";

export default class AddInput extends Component {
  state = {
    label: ""
  };
  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ""
    });
  };

  render() {
    return (
      <form className={styles.add_input_form} onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What needs to be done"
          className={styles.add_input}
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button className={styles.btn}>Add</button>
      </form>
    );
  }
}
