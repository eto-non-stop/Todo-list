import React from "react";
import styles from "./styles.module.css";

const Title = ({ toDo, done }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>My Todo List</h1>
      <h3 className={styles.counter}>
        {toDo} more to do, {done} done
      </h3>
    </div>
  );
};

export default Title;
