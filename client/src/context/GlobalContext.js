import React, { useContext, createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
import axios from "axios";

const initialState = {
  redirect: false,
};

const GlobalContext = createContext(initialState);

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  //FUNCTIONS
  const setRedirect = () => {
    dispatch({
      type: "SET_REDIRECT",
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        redirect: state.redirect,
        setRedirect,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
