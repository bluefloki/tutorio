export default (state, action) => {
  switch (action.type) {
    //HELPER FUNCTIONS START
    case "SET_REDIRECT":
      return {
        ...state,
        redirect: action.payload,
      };
    //HELPER FUNCTIONS END

    case "GET_LESSON_REQUESTS":
      return {
        ...state,
        lessonRequests: action.payload,
      };
    default:
      return state;
  }
};
