import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { Redirect } from "react-router-dom";

export default function Navbar({ isHomePage }) {
  const [redirect, setRedirect] = useState(false);
  const renderRedirect = () => {
    if (redirect) return <Redirect to="/" />;
  };

  const renderButtons = () => {
    if (localStorage.accessToken) {
      return <button className={styles.button}>Log Out</button>;
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
