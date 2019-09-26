import React from "react";
import styles from "./App.module.css";

import Title from "./components/Title/index";
import SearchPanel from "./components/SearchPanel/index";
import TodoList from "./components/TodoList/index";
import AddInput from "./components/AddItem/index";

const App = () => {
  const todoData = [
    { label: "Drink Coffe", important: false, id: 1 },
    { label: "Make Avesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 }
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.wrapper}>
        <Title />
        <SearchPanel />
        <TodoList todos={todoData} />
        <AddInput />
      </div>
    </div>
  );
};

export default App;
