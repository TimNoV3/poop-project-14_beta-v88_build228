import React from "react";
import Todos from "../containers/ContainerTodos";
import Button from "../containers/ContainerBCTodos";
import { NavLink } from "react-router-dom";
import styles from "../css/Board.module.css";

/** Называй кастомные(пользователские) компоненты с большой буквы! */
const Board = (props) => {
  return (
    <main>
      <div className={styles.link}>
        <NavLink to="/"><div className = {styles.title}>{props.list[props.match.params.id].name}</div></NavLink>
      </div>
      <div className={styles.wrapper}>
        {props.list[props.match.params.id].array.map((todos, id) => {
          return (
            <Todos
              key={id}
              {...todos}
              idTodos={id}
              idBoard={parseInt(props.match.params.id, 10)}
            />
          );
        })}

        <Button id={parseInt(props.match.params.id, 10)} />
      </div>
    </main>
  );
};

export default Board;
