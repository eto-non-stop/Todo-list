import React, { Component } from "react";
import styles from "./App.module.css";

import Title from "./components/Title/index";
import SearchPanel from "./components/SearchPanel/index";
import TodoList from "./components/TodoList/index";
import AddInput from "./components/AddItem/index";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { label: "Drink Coffe", important: false, id: 1 },
      { label: "Make Avesome App", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArr
      };
    });
  };

  addItem = text => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      };
    });
  };

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.wrapper}>
          <Title />
          <SearchPanel />
          <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
          <AddInput onItemAdded={this.addItem} />
        </div>
      </div>
    );
  }
}
