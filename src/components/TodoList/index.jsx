import React from "react";

import TodoListItem from "../TodoListItem";
import styles from "./styles.module.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;

    return (
      <TodoListItem
        {...itemProps}
        key={id}
        onDeleted={() => onDeleted(id)}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleDone={() => onToggleDone(id)}
      />
    );
  });

  return todos.length ? (
    <ul className={styles.ul}>{elements}</ul>
  ) : (
    <div className={styles.delete}>No todo</div>
  );
};

export default TodoList;
