import React, { useReducer, useEffect } from "react";
import { styles } from "../styles";
import { Redirect } from "react-router-dom";
import { useGlobalContext, authHeader } from "../context/GlobalContext";
import axios from "axios";

export const BaseForm = ({ signUp, isTutor }) => {
  const { redirect, setRedirect } = useGlobalContext();

  useEffect(() => {
    return () => {
      setRedirect(false);
    };
  }, []);

  //Render Redirect
  const renderRedirect = () => {
    if (redirect) {
      if (!signUp && isTutor) return <Redirect to="/lessons" />;
      else return <Redirect to="/" />;
    }
  };

  //SET USER INPUT
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      name: "",
      email: "",
      password: "",
    }
  );

  //Handle User input
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setUserInput({ [key]: value });
  };

  const renderNameField = () => {
    if (signUp) {
      return (
        <div className="mb-4">
          <label className={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            className={styles.inputField}
            placeholder="Name"
            required
            onChange={handleChange}
          />
        </div>
      );
    }
  };

  const renderHeadings = () => {
    let heading = signUp ? "Sign Up" : "Log In";
    if (isTutor) return `Tutor ${heading}`;
    else return heading;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userInput);
    let endpoint;
    endpoint = signUp
      ? isTutor
        ? "tutors"
        : "users"
      : isTutor
      ? "tutors/login"
      : "login";
    try {
      const res = await axios.post(`/${endpoint}`, userInput);
      if (endpoint.includes("login")) {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("username", res.data.name);
        localStorage.setItem("role", res.data.role);
        setRedirect(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative" style={{ top: "5vh" }}>
      <h3 className="my-2 text-3xl font-semibold">{renderHeadings()}</h3>
      <form
        onSubmit={handleSubmit}
        className={`px-8 pt-6 pb-8 mb-4 ${styles.formWithShadow}`}
        style={{ width: "450px" }}
      >
        {renderNameField()}
        <div className="mb-4">
          <label className={styles.label}>Email</label>
          <input
            type="text"
            name="email"
            className={styles.inputField}
            placeholder="Email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            className={styles.inputField}
            placeholder="Password"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className={styles.button}>
            {signUp ? "Sign Up" : "Log In"}
          </button>
        </div>
      </form>
      {renderRedirect()}
    </div>
  );
};
