import React from "react";
import ButtonCreateTodos from "../containers/ContainerBCBoard";
import { NavLink } from "react-router-dom";
import styles from "../css/ListBoard.module.css";

const list_board = (props) => {
  const deleteBoard = (id) => {
    props.delBoard(id)
  }
  return (
    <main className={styles.listBoard}>
      <ButtonCreateTodos />
      {props.listBoard.map((board, id) => {
        return (
          <div className={styles.link} key={id}>
            <div className = {styles.close} onClick = {() => deleteBoard(id)}>&#215;</div>
            <NavLink to={`/${id}`}>{board.name}</NavLink>
          </div>
        );
      })}
    </main>
  );
};

export default list_board;
