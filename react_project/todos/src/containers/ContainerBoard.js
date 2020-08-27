import { connect } from "react-redux";
import Board from "../components/Board.js";

const mapStateToProps = (state) => {
  return {
    list: state,
  };
};

export default connect(mapStateToProps)(Board);
