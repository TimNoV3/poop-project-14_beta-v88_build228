import React from "react";
import Todo from "../containers/ContainerTodo";
import styles from "../css/Todos.module.css";

const Todos = (props) => {
  const deleteTodos = (idBoard, idTodos) => {
    props.delTodos(idBoard, idTodos);
  }
  const click = (e) => {
    e.preventDefault();
    /** name объявлен с let и не изменяется */
    let name = e.target.input.value;
    props.addTodo(props.idBoard, props.idTodos, name);
    console.log(props.state[props.idBoard].array[props.idTodos]);
    e.target.input.value = "";
  };
  return (
    <main className={styles.wrapper}>
      <div className = {styles.closeWrapper}>
        <div className = {styles.close} onClick = {() => {deleteTodos(props.idBoard, props.idTodos)}} >&#215;</div>
      </div>      
      <div className={styles.title}>{props.name}</div>
      <hr className={styles.hr}></hr>
      <form onSubmit={click}>
        <input className={styles.input} type="text" name="input"></input>
        <div className={styles.wrapperTodo}>
          {props.array.map((todo, id) => {
            return (
              <Todo
                key={id}
                id={id}
                idBoard={props.idBoard}
                idTodos={props.idTodos}
                {...todo}
              />
            );
          })}
        </div>
      </form>
    </main>
  );
};

export default Todos;
