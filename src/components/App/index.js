import App from "./App";
import { connect } from "react-redux";

import { getIdeas } from "../../data/actions/api";

const mapStateToProps = (state) => {
  return {
    loaded: state.loaded,
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
