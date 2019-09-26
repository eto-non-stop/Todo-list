import React from "react";

import TodoListItem from "../TodoListItem";
import styles from "./styles.module.css";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;

    return <TodoListItem {...itemProps} key={id} />;
  });

  return <ul className={styles.ul}>{elements}</ul>;
};

export default TodoList;
