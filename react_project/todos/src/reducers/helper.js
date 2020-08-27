export const helpAddTodo = (board, idTodos, name) => {
  return {
    ...board,
    array: board.array.map((todos, id) => {
      return id === idTodos ? helperAddTodo(todos, name) : todos;
    }),
  };
};

const helperAddTodo = (todos, name) => {
  return {
    ...todos,
    array: [...todos.array, { name: name, completed: false }],
  };
};

export const helpDelTodo = (board, idTodos, idTodo) => {
  return {
    ...board,
    array: board.array.map((todos, id) => {
      return id === idTodos ? helperDelTodo(todos, idTodo) : todos;
    }),
  };
};

const helperDelTodo = (todos, idTodo) => {
  return {
    ...todos,
    array: [
      ...todos.array.slice(0, idTodo),
      ...todos.array.slice(idTodo + 1),
    ],
  };
};

export const helpToggleTodo = (board, idTodos, idTodo) => {
  return {
    ...board,
    array: board.array.map((todos, id) => {
      return id === idTodos ? helperToggleTodo(todos, idTodo) : todos;
    }),
  };
};

const helperToggleTodo = (todos, idTodo) => {
  return {
    ...todos,
    array: todos.array.map((todo, id) => {
      return id === idTodo
        ? { name: todo.name, completed: !todo.completed }
        : todo;
    }),
  };
};

export const helpAddTodos = (board, name) => {
  return {
    ...board,
    array: [...board.array, { name: name, array: [] }],
  };
};

export const helpDelTodos = (board, idTodos) => {
  return {
    ...board,
    array: [
      ...board.array.slice(0, idTodos),
      ...board.array.slice(idTodos + 1),
    ],
  };
};
