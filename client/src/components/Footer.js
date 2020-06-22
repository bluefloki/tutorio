import React from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";

const links = [
  { id: 1, title: "About", href: "/about" },
  { id: 2, title: "Terms & Conditions", href: "/about" },
  { id: 3, title: "Privacy Policy", href: "/about" },
  { id: 4, title: "Teacher Join Here", href: "/teach" },
];

export default function Footer() {
  return (
    <footer className="text-center relative" style={{ top: "60vh" }}>
      <div className="flex-center flex-row">
        {links.map((link) => {
          return;
        })}
        <FooterLink />
        <button className={styles.fullRoundButton}>
          <Link to="/about">
            <i className="fas fa-scroll mx-2"></i>
          </Link>
        </button>
        <button className={styles.fullRoundButton}>
          <Link to="/about">
            <i className="fas fa-lock mx-2"></i>
          </Link>
        </button>
        <button className={styles.fullRoundButton}>
          <Link to="/teach">
            <i className="fas fa-chalkboard-teacher mx-2"></i>
          </Link>
        </button>
      </div>
      <p className="text-lg">Tutorio &copy; 2020</p>
    </footer>
  );
}

export const FooterLink = ({}) => {
  return (
    <button className={`${styles.fullRoundButton} has-tooltip`}>
      <Link to="/about">
        <i className="fas fa-question mx-2"></i>
      </Link>
      <span className="tooltip-text bg-black text-white text-center px-6">
        Look at this!
      </span>
    </button>
  );
};
