import React, { useReducer, useState } from "react";
import Navbar from "./Navbar";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default function Login({ endpoint }) {
  //Set and render redirect
  const [redirect, setRedirect] = useState(false);
  const renderRedirect = () => {
    if (redirect) {
      if (endpoint == "login") return <Redirect to="/" />;
      else return <Redirect to="/tutorDashboard" />;
    }
  };

  //Render Tutor Login
  const renderTutorLink = () => {
    if (endpoint == "login")
      return (
        <div className="field" style={{ marginTop: 20 }}>
          <Link to="/tutorLogin" className="button is-dark">
            <i className="fas fa-user-tie"></i>
            Tutor Log In
          </Link>
        </div>
      );
  };

  //Set user input
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
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

  //Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/${endpoint}`, userInput);
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("username", res.data.name);
      localStorage.setItem("role", res.data.role);
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h3 className="is-size-2 has-text-centered">
          {endpoint == "login" ? "Log In" : "Tutor Log In"}
        </h3>
        <div className="columns is-centered" style={{ marginTop: 50 }}>
          <div className="column is-half is-vcentered">
            <form className="form-500" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field" style={{ marginTop: 20 }}>
                <button className="button is-primary" type="submit">
                  Log In
                </button>
              </div>
              {renderTutorLink()}
            </form>
          </div>
        </div>
      </div>
      {renderRedirect()}
    </div>
  );
}
