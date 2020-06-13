import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar is-dark" style={{ marginBottom: 50 }}>
      <div className="container">
        <div className="navbar-brand">
          <h1 className="navbar-item is-size-2">
            <span className="has-text-primary">Tutorio </span>.io
          </h1>
        </div>
        <div className="navbar-menu navbar-end">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          {/* <Link to="/about" className="navbar-item">
            About
          </Link> */}
          <Link to="/learn" className="navbar-item">
            Learn
          </Link>
          <Link to="/tutors" className="navbar-item">
            Tutors
          </Link>
          {/* <Link to="/teach" className="navbar-item">
            Teach
          </Link> */}
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/register" className="button is-primary">
                Sign Up
              </Link>
              <Link to="/login" className="button is-primary is-outlined">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
