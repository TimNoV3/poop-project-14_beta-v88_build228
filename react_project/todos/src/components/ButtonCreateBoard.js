import React, { useState } from "react";
import styles from "../css/ButtonCreateBoard.module.css";
const ButtonCreateTodos = (props) => {
  let [isVis, changeHook] = useState(false);

  const isVisible = () => {
    changeHook(!isVis);
  };

  const cancel = () => {
    changeHook(!isVis);
  };

  const create = () => {
    let text = document.querySelector("form").input.value.trim();
    if (text) {
      props.addBoard(text);
      changeHook(!isVis);
    }
  };

  return (
    <div className={styles.ButtonCreateBoard}>
      {isVis ? (
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
        <button className={styles.button} onClick={isVisible}>
          Create a new board...
        </button>
      )}
    </div>
  );
};

export default ButtonCreateTodos;
