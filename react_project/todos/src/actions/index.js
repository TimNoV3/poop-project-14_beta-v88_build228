/** Типы экшенов нужно вынести в константы, а не хардкодить тут! */

export const addBoard = (name) => ({
  type: "ADD_BOARD",
  name: name,
});

export const addTodos = (idBoard, name) => ({
  type: "ADD_TODOS",
  idBoard: idBoard,
  name: name,
});

export const addTodo = (idBoard, idTodos, name) => ({
  type: "ADD_TODO",
  idBoard: idBoard,
  idTodos: idTodos,
  name: name,
});

export const delBoard = (idBoard) => ({
  type: "DELETE_BOARD",
  idBoard: idBoard,
});

export const delTodos = (idBoard, idTodos) => ({
  type: "DELETE_TODOS",
  idBoard: idBoard,
  idTodos: idTodos,
});

export const delTodo = (idBoard, idTodos, idTodo) => ({
  type: "DELETE_TODO",
  idBoard: idBoard,
  idTodos: idTodos,
  idTodo: idTodo,
});

export const toggleTodo = (idBoard, idTodos, idTodo) => ({
  type: "TOGGLE_TODO",
  idBoard: idBoard,
  idTodos: idTodos,
  idTodo: idTodo,
});
