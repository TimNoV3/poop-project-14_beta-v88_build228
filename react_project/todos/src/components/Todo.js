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
        <div className = {styles.title}><div>{props.name}</div></div>
        {/* check mark */}
        <div>&#10004;</div>
      </div>
    </div>
  );
};

export default todo;
