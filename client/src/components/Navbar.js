import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

export default function Navbar() {
  //render redirect
  const [redirect, setRedirect] = useState(false);
  const renderRedirect = () => {
    if (redirect) return <Redirect to="/" />;
  };

  //Render Teacher Specific Buttons
  const renderTeacherButtons = () => {
    if (localStorage.role === "tutor") {
      return (
        <>
          <Link to="/tutorDashboard" className="navbar-item ">
            <i className="fas fa-code has-text-dark mr-2"></i>Dashboard
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/" className="navbar-item ">
            <i className="fas fa-envelope has-text-dark mr-2"></i>Chats
          </Link>
          <Link to="/" className="navbar-item ">
            <i className="fas fa-user-edit has-text-dark mr-2"></i>Edit Profile
          </Link>
          <Link to="/" className="navbar-item ">
            <i className="fas fa-book has-text-dark mr-2"></i>My Lessons
          </Link>
          <Link to="/" className="navbar-item ">
            <i className="fas fa-clock has-text-dark mr-2"></i>My Appointments
          </Link>
        </>
      );
    }
  };

  //Render Buttons based on login state
  const renderButtons = () => {
    if (localStorage.accessToken) {
      return (
        <>
          <div className="navbar-item has-dropdown navbar-link is-hoverable">
            {localStorage.username}
            <i className="fas fa-user-circle has-text-primary is-size-4 ml-2"></i>
            <div className="navbar-dropdown is-boxed">
              {renderTeacherButtons()}
              <hr className="navbar-divider" />
              <p
                className="navbar-item has-text-danger"
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("username");
                  localStorage.removeItem("role");
                  setRedirect(true);
                }}
              >
                <i className="fas fa-sign-out-alt"></i>Log Out
              </p>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className="buttons">
          <Link to="/register" className="button is-primary">
            Sign Up
          </Link>
          <Link to="/login" className="button is-primary is-outlined">
            Log In
          </Link>
        </div>
      );
    }
  };

  return (
    <nav className="navbar is-dark is-transparent" style={{ marginBottom: 50 }}>
      {renderRedirect()}
      <div className="container">
        <div className="navbar-brand">
          <h1 className="navbar-item is-size-2">
            <span className="has-text-primary">Tutorio </span>.io
          </h1>
        </div>
        <div className="navbar-start">
          <div className="navbar-menu">
            <Link to="/" className="navbar-item nav-link">
              <i className="fas fa-home mr-1"></i>Home
            </Link>
            <Link to="/about" className="navbar-item nav-link">
              <i className="fas fa-building mr-1"></i>About
            </Link>
            <Link to="/lessons" className="navbar-item nav-link">
              <i className="fas fa-laptop-code mr-1"></i>Lessons
            </Link>
            <Link to="/tutors" className="navbar-item nav-link">
              <i className="fas fa-user-tie mr-1"></i>Tutors
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">{renderButtons()}</div>
        </div>
      </div>
    </nav>
  );
}
