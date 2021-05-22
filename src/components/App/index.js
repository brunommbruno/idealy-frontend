import App from "./App";
import { connect } from "react-redux";

import { getIdeas, likeIdea } from "../../data/actions/api";

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas,
    loaded: state.loaded,
    amount: state.amount - 1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getIdeas: () => {
      dispatch(getIdeas());
    },
    likeIdea: ({ id, likes }) => {
      dispatch(likeIdea({ id: id, likes: likes }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
