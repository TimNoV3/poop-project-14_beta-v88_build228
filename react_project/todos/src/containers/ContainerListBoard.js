import ListBoard from "../components/ListBoard.js";
import { connect } from "react-redux";
import { delBoard } from "../actions/index.js"

const mapStateToProps = (state) => {
  return {
    listBoard: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    delBoard: (idBoard) => {
      dispatch(delBoard(idBoard))
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListBoard);
