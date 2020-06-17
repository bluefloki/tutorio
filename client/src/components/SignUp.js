import React, { useReducer, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

export default function SignUp({ endpoint }) {
  const [redirect, setRedirect] = useState(false);
  const renderRedirect = () => {
    if (redirect) return <Redirect to="/login" />;
  };
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

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setUserInput({ [key]: value });
  };

  //Render Tutor Sign Up
  const renderTutorLink = () => {
    if (endpoint == "users")
      return (
        <div className="field" style={{ marginTop: 20 }}>
          <Link to="/teach" className="button is-dark">
            <i className="fas fa-user-tie"></i>
            Tutor Sign Up
          </Link>
        </div>
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userInput);
    try {
      await axios.post(`/api/v1/${endpoint}`, userInput);
      alert("Form Submitted");
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {renderRedirect()}
      <Navbar />
      <div className="container">
        <h3 className="is-size-2 has-text-centered">
          {endpoint == "users" ? "Sign Up" : "Tutor Sign Up"}
        </h3>
        <div className="columns is-centered" style={{ marginTop: 50 }}>
          <div className="column is-half is-vcentered">
            <form className="form-500" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name" className="label">
                  Full Name <span className="has-text-info">*</span>
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    value={userInput.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email" className="label">
                  Email <span className="has-text-info">*</span>
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="email"
                    value={userInput.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="password" className="label">
                  Password <span className="has-text-info">*</span>
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    value={userInput.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field" style={{ marginTop: 20 }}>
                <button className="button is-primary" type="submit">
                  Sign Up
                </button>
              </div>
              {renderTutorLink()}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
