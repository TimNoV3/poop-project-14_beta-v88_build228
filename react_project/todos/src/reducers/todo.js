import { helpAddTodo, helpDelTodo, helpToggleTodo, helpAddTodos, helpDelTodos } from './helper.js';

const todo_reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      return [
        ...state,
        {
          name: action.name,
          array: [],
        },
      ];
    case 'DELETE_BOARD':
      return [...state.slice(0, action.idBoard), ...state.slice(action.idBoard + 1)];
    case 'ADD_TODO':
      return state.map((board, id) => {
        return id === action.idBoard ? helpAddTodo(board, action.idTodos, action.name) : board;
      });

    case 'DELETE_TODO':
      return state.map((board, id) => {
        return id === action.idBoard ? helpDelTodo(board, action.idTodos, action.idTodo) : board;
      });

    case 'TOGGLE_TODO':
      return state.map((board, id) => {
        return id === action.idBoard ? helpToggleTodo(board, action.idTodos, action.idTodo) : board;
      });

    case 'ADD_TODOS':
      return state.map((board, id) => {
        return id === action.idBoard ? helpAddTodos(board, action.name) : board;
      });

    case 'DELETE_TODOS':
      return state.map((board, id) => {
        return id === action.idBoard ? helpDelTodos(board, action.idTodos) : board;
      });

    default:
      return state;
  }
};

export default todo_reducer;
