import React, { Component } from "react";
import styles from "./App.module.css";

import Title from "./components/Title/index";
import ItemStatusFilter from "./components/ItemStatusFilter/index";

import SearchPanel from "./components/SearchPanel/index";
import TodoList from "./components/TodoList/index";
import AddInput from "./components/AddItem/index";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Avesome App"),
      this.createTodoItem("Have a lunch")
    ],
    term: "",
    filter: "all"
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

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
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };

  onSearchChange = term => {
    this.setState({ term });
  };

  onFilterChange = filter => {
    this.setState({ filter });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) !== -1;
    });
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(item => !item.done);
      case "done":
        return items.filter(item => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className={styles.wrap}>
        <div className={styles.wrapper}>
          <Title toDo={todoCount} done={doneCount} />
          <div className={styles.search_panel}>
            <SearchPanel
              onSearchChange={this.onSearchChange}
              value={this.state.term}
            />
            <ItemStatusFilter
              filter={filter}
              onFilterChange={this.onFilterChange}
            />
          </div>
          <TodoList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
          <AddInput onItemAdded={this.addItem} />
        </div>
      </div>
    );
  }
}
