import { connect } from 'react-redux';
import Todo from '../components/Todo.js';
import { toggleTodo } from '../actions/';

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: (idBoard, idTodos, idTodo) => dispatch(toggleTodo(idBoard, idTodos, idTodo)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
