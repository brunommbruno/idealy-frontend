import App from "./App";
import { connect } from "react-redux";

import { getIdeas } from "../../data/actions/api";

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas,
    loaded: state.loaded,
    amount: state.amount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getIdeas: () => {
      dispatch(getIdeas());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
