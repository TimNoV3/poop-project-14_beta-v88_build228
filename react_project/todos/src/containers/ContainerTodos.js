import { connect } from 'react-redux';
import { addTodo, delTodos } from '../actions';
import Todos from '../components/Todos.js';

const mapDisaptchToProps = (dispatch) => {
  return {
    addTodo: (idBoard, idTodos, name) => {
      dispatch(addTodo(idBoard, idTodos, name));
    },
    delTodos: (idBoard, idTodos) => {
      dispatch(delTodos(idBoard, idTodos));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps, mapDisaptchToProps)(Todos);
