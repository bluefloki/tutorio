import React from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Join({ isTutor }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this works");
  };

  const renderTutorButton = () => {
    if (!isTutor) {
      return (
        <button className={`${styles.button} mt-8 px-4 mx-0`}>
          <Link to="/teach">
            <i className="fas fa-chalkboard-teacher mr-2"></i>Tutors Join Here{" "}
            <i className="fas fa-arrow-right ml-1"></i>
          </Link>
        </button>
      );
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <BaseForm submitFunc={handleSubmit} signUp isTutor={isTutor} />
          <div>
            <BaseForm submitFunc={handleSubmit} isTutor={isTutor} />
            <br />
            {renderTutorButton()}
          </div>
        </div>
      </div>
    </div>
  );
}

export const BaseForm = ({ submitFunc, signUp, isTutor }) => {
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

  return (
    <div className="relative" style={{ top: "5vh" }}>
      <h3 className="my-2 text-3xl font-semibold">{renderHeadings()}</h3>
      <form
        onSubmit={submitFunc}
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
          />
        </div>
        <div>
          <button type="submit" className={styles.button}>
            {signUp ? "Sign Up" : "Log In"}
          </button>
        </div>
      </form>
    </div>
  );
};
