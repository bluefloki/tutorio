export default (state, action) => {
  switch (action.type) {
    case "SET_REDIRECT":
      return {
        redirect: true,
      };
    default:
      return state;
  }
};
