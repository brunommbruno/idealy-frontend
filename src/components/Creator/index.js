import Creator from "./Creator";
import { connect } from "react-redux";

import { postIdea } from "../../data/actions/api";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    postIdea: ({ bk_color, description, user, tags, likes, txt_color }) => {
      dispatch(
        postIdea({
          bk_color: bk_color,
          description: description,
          user: user,
          tags: tags,
          likes: likes,
          txt_color: txt_color,
        })
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Creator);
