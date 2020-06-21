export default (state, action) => {
  switch (action.type) {
    case "GET_LESSON_REQUESTS":
      return {
        ...state,
        lessonRequests: action.payload,
      };
    default:
      return state;
  }
};
