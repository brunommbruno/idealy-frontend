export const addIdea = ({
  id,
  description,
  tags,
  likes,
  bk_color,
  txt_color,
  user,
}) => {
  return {
    type: "ADD_IDEA",
    payload: {
      id: id,
      description: description,
      tags: tags,
      likes: likes,
      bk_color: bk_color,
      txt_color: txt_color,
      user: user,
    },
  };
};
