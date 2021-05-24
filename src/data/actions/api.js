import { addIdea, updateIdea } from "./state";
import axios from "../../axios";

export const getIdeas = () => {
  return (dispatch) => {
    axios.get("/ideas").then(({ data }) => {
      data.data.forEach((idea) => {
        dispatch(
          addIdea({
            id: idea.id,
            description: idea.description,
            tags: idea.tags,
            likes: idea.likes,
            bk_color: idea.bk_color,
            txt_color: idea.txt_color,
            user: idea.user,
          })
        );
      });
    });
  };
};

export const postIdea = ({
  bk_color,
  description,
  user,
  tags,
  likes,
  txt_color,
}) => {
  return (dispatch) => {
    axios.post("/ideas/", {
      bk_color: bk_color,
      description: description,
      user: user,
      tags: tags,
      likes: likes,
      txt_color: txt_color,
    });
  };
};

export const likeIdea = ({ id, likes }) => {
  return (dispatch) => {
    axios.put(`/ideas/${id}`, { likes: likes + 1 }).then(({ data }) => {
      dispatch(
        updateIdea({
          id: data.id,
          likes: data.likes,
        })
      );
    });
  };
};
