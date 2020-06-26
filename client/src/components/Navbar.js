import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { Redirect } from "react-router-dom";

export default function Navbar({ isHomePage }) {
  const [redirect, setRedirect] = useState(false);
  const renderRedirect = () => {
    if (redirect) return <Redirect to="/" />;
  };

  //DROP DOWN BUTTONS FOR TUTORS AND STUDENTS
  const renderDropDownOptions = () => {
    if (localStorage.role === "tutor") {
      return (
        <Link to="/tutorDashboard" className={styles.dropDownLink}>
          Dashboard
        </Link>
      );
    } else {
      return (
        <>
          <Link to="/about" className={styles.dropDownLink}>
            Edit Profile
          </Link>
          <Link to="/about" className={styles.dropDownLink}>
            Chats
          </Link>
          <Link to="/about" className={styles.dropDownLink}>
            My Lessons
          </Link>
        </>
      );
    }
  };

  //TOGGLE DISPLAY
  const [dropDown, setDropDown] = useState(false);
  const renderDropDown = () => {
    if (dropDown) {
      return (
        <div className="absolute bg-white rounded-lg pt-2 pb-1 mt-2 shadow-md px-2">
          {renderDropDownOptions()}
          <p
            className={`${styles.dropDownLink} cursor-pointer`}
            onClick={() => {
              localStorage.clear();
              setRedirect(true);
            }}
          >
            Log Out
          </p>
        </div>
      );
    }
  };

  const renderButtons = () => {
    if (localStorage.accessToken) {
      return (
        <div>
          <div
            className="flex flex-row items-center hover:text-orange-600 cursor-pointer transition duration-300 ease-in-out"
            onClick={() => setDropDown(!dropDown)}
          >
            <button className="w-10 h-10 bg-orange-500 text-white rounded-full focus:outline-none">
              <i className="fas fa-user"></i>
            </button>
            <i className="fas fa-angle-down ml-2"></i>
          </div>
          {renderDropDown()}
        </div>
      );
    } else {
      return (
        <button className="btn">
          <Link to="/join" className={styles.button}>
            Join <i className="fas fa-arrow-right ml-1"></i>
          </Link>
        </button>
      );
    }
  };

  return (
    <nav
      className={`py-2 mb-6 ${isHomePage ? "" : "border-b-2 border-gray-600"}`}
    >
      <div className="container mx-auto flex flex-row items-center justify-between">
        <h3 className="text-4xl font-bold">Tutorio.io</h3>
        <ul className="flex items-center">
          <li className={styles.navLink}>
            <Link to="/">
              <i className="fas fa-home mr-1"></i>Home
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link to="/lessons">
              <i className="fas fa-book mr-1"></i>Lessons
            </Link>
          </li>
          <li className="px-1">{renderButtons()}</li>
        </ul>
      </div>
      {renderRedirect()}
    </nav>
  );
}
