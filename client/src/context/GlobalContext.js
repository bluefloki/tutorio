import React, { useContext, createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
import axios from "axios";

export const authHeader = {
  Authorization: `Bearer ${localStorage.accessToken}`,
};

const initialState = {
  lessonRequests: [],
};

const GlobalContext = createContext(initialState);

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  //GET LESSON REQUESTS
  const getLessonRequests = async () => {
    try {
      const res = await axios.get("/api/v1/lessonRequests", {
        headers: authHeader,
      });
      dispatch({
        type: "GET_LESSON_REQUESTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        lessonRequests: state.lessonRequests,
        getLessonRequests,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
