import React from "react";
import styles from "./styles.module.css";

const AddInput = () => {
  return (
    <div className={styles.add_input_form}>
      <input
        type="text"
        placeholder="enter here"
        className={styles.add_input}
      />
      <button className={styles.btn}>Add</button>
    </div>
  );
};

export default AddInput;
