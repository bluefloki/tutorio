import React from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import Navbar from "./Navbar";
import { BaseForm } from "./JoinForm";
import axios from "axios";

export default function Join({ isTutor }) {
  const renderTutorButton = () => {
    if (!isTutor) {
      return (
        <Link to="/teach">
          <button className={`${styles.button} mt-10 px-4 mx-0`}>
            <i className="fas fa-chalkboard-teacher mr-2"></i>Tutors Join Here{" "}
            <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </Link>
      );
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <BaseForm signUp isTutor={isTutor} />
          <div>
            <BaseForm isTutor={isTutor} />
            <br />
            {renderTutorButton()}
          </div>
        </div>
      </div>
    </div>
  );
}
