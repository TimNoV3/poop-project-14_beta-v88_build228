import React from "react";
import Popup from "reactjs-popup";
import styles from "../css/ButtonCreateTodos.module.css";
import "../css/main.css";
const Button = (props) => {
  const click = (close) => (e) => {
    e.preventDefault();
    const name = e.target.input.value.trim();
    if (name) {
      props.addTodos(props.id, name);
      e.target.input.value = "";
      close();
    }

    console.log(props);
  };
  return (
    <Popup
      trigger={<button className={styles.button}> Add a list... </button>}
      modal
      closeOnDocumentClick
    >
      {(close) => (
        <main className={styles.popup}>
          <form className={styles.form} onSubmit={click(close)}>
            <input
              className={styles.input}
              placeholder="  add a list"
              name="input"
            ></input>
            <p className={styles.par}>give me a name!</p>
          </form>
        </main>
      )}
    </Popup>
  );
};

export default Button;
