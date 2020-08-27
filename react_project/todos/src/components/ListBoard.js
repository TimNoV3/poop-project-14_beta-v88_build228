import React from 'react';
import ButtonCreateTodos from '../containers/ContainerBCBoard';
import { NavLink } from 'react-router-dom';
import styles from '../css/ListBoard.module.css';

const listBoard = ({ delBoard, listBoard }) => {
  const deleteBoard = (id) => {
    delBoard(id);
  };
  return (
    <main className={styles.listBoard}>
      <ButtonCreateTodos />
      {listBoard.map((board, id) => {
        return (
          <div className={styles.link} key={id}>
            <div className={styles.close} onClick={() => deleteBoard(id)}>
              &#215;
            </div>
            <NavLink to={`/${id}`}>
              <div className={styles.title}>{board.name}</div>
            </NavLink>
          </div>
        );
      })}
    </main>
  );
};

export default listBoard;
