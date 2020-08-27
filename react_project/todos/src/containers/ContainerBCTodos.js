import { connect } from "react-redux";
import Button from "../components/ButtonCreateTodos";
import { addTodos } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: (idBoard, name) => {
      dispatch(addTodos(idBoard, name));
    },
  };
};

export default connect(null, mapDispatchToProps)(Button);
