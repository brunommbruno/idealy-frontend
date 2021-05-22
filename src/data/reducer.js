import initial from "./initial";

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return initial;
    default:
      return state;
  }
};

export default reducer;
