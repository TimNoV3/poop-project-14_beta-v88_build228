import React from "react";
import styles from "../css/Todo.module.css";

const todo = (props) => {
  const toggle = () => {
    props.toggle(props.idBoard, props.idTodos, props.id);
    console.log(props);
  };
  return (
    <div className={styles.wrapper} onClick={toggle}>
      <div className={props.completed ? styles.completed : styles.inProgress}>
        <p>{props.name}</p>
        {/* Пиши тут комментарий что это за символ */}
        <div>&#10004;</div>
      </div>
    </div>
  );
};

export default todo;
