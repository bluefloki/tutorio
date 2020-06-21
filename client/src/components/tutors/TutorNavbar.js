import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

export default function TutorNavbar() {
  const [redirect, setRedirect] = useState(false);
  const renderRedirect = () => {
    if (redirect) return <Redirect to="/" />;
  };
  return (
    <div
      className="has-background-dark has-text-white"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <h3 className="is-size-3 has-text-centered py-4">
          Tutor Dashboard<i className="fas fa-code has-text-primary ml-2"></i>
        </h3>
        <aside className="menu" style={{ width: "80%", margin: "auto" }}>
          <div className="my-4 is-size-4">
            <i className="fas fa-user-circle has-text-primary is-size-4 mr-2"></i>
            {localStorage.username}
          </div>
          <ul className="menu-list"></ul>
          <li>
            <Link to="/tutorDashboard/chats" className="is-size-5">
              <i className="fas fa-envelope has-text-primary mr-2"></i>Chats
            </Link>
          </li>
          <li>
            <Link to="/tutorDashboard/lessonRequests" className="is-size-5">
              <i className="fas fa-user-plus has-text-primary mr-2"></i>Lesson
              Requests
            </Link>
          </li>
          <li>
            <Link to="/tutorDashboard/analytics" className="is-size-5">
              <i className="fas fa-chart-bar has-text-primary mr-2"></i>
              Analytics
            </Link>
          </li>
          <li>
            <Link to="/tutorDashboard/editProfile" className="is-size-5">
              <i className="fas fa-user-edit has-text-primary mr-2"></i>Edit
              Profile
            </Link>
          </li>
          <li>
            <Link to="/tutorDashboard/appointments" className="is-size-5">
              <i className="fas fa-clock has-text-primary mr-2"></i>My
              Appointments
            </Link>
          </li>
          <li>
            <Link to="/tutorDashboard/studentList" className="is-size-5">
              <i className="fas fa-user-graduate has-text-primary mr-2"></i>My
              Students
            </Link>
          </li>
          <li>
            <Link to="/tutorDashboard/lessonList" className="is-size-5">
              <i className="fas fa-book has-text-primary mr-2"></i>My Lessons
            </Link>
          </li>
          {/* <p className="menu-label is-size-5">
            COURSES{" "}
            <span>
              <i className="fas fa-book has-text-primary"></i>
            </span>
          </p> */}
          <li>
            <Link to="/tutorDashboard/createLesson" className="is-size-5">
              <i className="fas fa-plus has-text-primary mr-2"></i>Create New
              Lesson
            </Link>
          </li>

          <button
            onClick={() => {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("username");
              localStorage.removeItem("role");
              setRedirect(true);
            }}
            className="button is-danger my-4"
          >
            <i className="fas fa-sign-out-alt"></i>Log Out
          </button>
        </aside>
      </div>
      {renderRedirect()}
    </div>
  );
}
