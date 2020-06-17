import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

export default function TutorNavbar() {
  const { setRedirect, redirect } = useGlobalContext();
  const renderRedirect = () => {
    if (redirect) return <Redirect to="/" />;
  };
  return (
    <div
      className="has-background-dark has-text-white"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <h3 className="is-size-3 has-text-centered py-4">
          Tutor Dashboard<i className="fas fa-code has-text-primary ml-2"></i>
        </h3>
        <aside className="menu" style={{ width: "80%", margin: "auto" }}>
          <ul className="menu-list"></ul>
          <li>
            <Link to="/tutorDashboard/chats" className="is-size-5">
              Chats
            </Link>
          </li>
          <li>
            <Link to="/tutorDashboard/appointments" className="is-size-5">
              My Appointments
            </Link>
          </li>
          <li>
            <Link to="/tutorDashboard/studentList" className="is-size-5">
              My Students
            </Link>
          </li>
          <li>
            <Link to="/tutorDashboard/lessonList" className="is-size-5">
              My Lessons
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
              Create New Lesson
            </Link>
          </li>

          <button
            onClick={() => {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("username");
              localStorage.removeItem("role");
              setRedirect();
            }}
            className="button is-danger"
          >
            <i className="fas fa-sign-out-alt"></i>Log Out
          </button>
        </aside>
      </div>
    </div>
  );
}
