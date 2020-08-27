import React, { useState } from "react";
import styles from "../css/ButtonCreateBoard.module.css";
const ButtonCreateTodos = (props) => {
  let [isVisible, setVisible] = useState(false);

 

  const cancel = () => {
    setVisible(!isVisible);
  };

  const create = () => {
    const text = document.querySelector("form").input.value.trim();
    if (text) {
      props.addBoard(text);
      setVisible(!isVisible);
    }
  };

  return (
    <div className={styles.ButtonCreateBoard}>
      {isVisible ? (
        <div className={styles.wrapper}>
          <label>Creating a board</label>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>What shall we call the board?</label>
            <input name="input"></input>
            <div>
              <button className={styles.cancel} type="button" onClick={cancel}>
                cancel
              </button>
              <button className={styles.create} type="button" onClick={create}>
                create
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button className={styles.button} onClick={cancel}>
          Create a new board...
        </button>
      )}
    </div>
  );
};

export default ButtonCreateTodos;
