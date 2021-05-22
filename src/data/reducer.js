import initial from "./initial";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_IDEA":
      return {
        ...state,
        ideas: [...state.ideas, action.payload],
        loaded: true,
        amount: state.amount + 1,
      };

    case "UPDATE_IDEA":
      return {
        ...state,
        ideas: state.ideas.map((idea) => {
          if (idea.id !== action.payload.id) {
            return idea;
          } else {
            return {
              ...idea,
              ...action.payload,
            };
          }
        }),
      };

    case "RESET":
      return initial;
    default:
      return state;
  }
};

export default reducer;
