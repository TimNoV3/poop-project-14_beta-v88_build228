import { connect } from 'react-redux';
import { addBoard } from '../actions';
import ButtonCreateTodos from '../components/ButtonCreateBoard.js';

const mapDispatchToProps = (dispatch) => {
  return {
    addBoard: (name) => {
      dispatch(addBoard(name));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCreateTodos);
