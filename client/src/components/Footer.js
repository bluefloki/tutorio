import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";

const links = [
  { id: 1, title: "About", href: "/about", icon: "fa-question" },
  { id: 2, title: "Terms & Conditions", href: "/about", icon: "fa-scroll" },
  { id: 3, title: "Privacy Policy", href: "/about", icon: "fa-lock" },
];

export default function Footer() {
  return (
    <footer className="relative" style={{ top: "55vh" }}>
      <div className="flex flex-row justify-center">
        {links.map((link) => {
          return <FooterLink id={link.id} link={link} />;
        })}
      </div>
      <p className="text-lg text-center">Tutorio &copy; 2020</p>
    </footer>
  );
}

export const FooterLink = ({ link: { title, href, icon } }) => {
  const [tooltip, toggleTooltip] = useState(false);
  const renderTitle = () => {
    if (tooltip) return <p className="text-center absolute">{title}</p>;
  };
  return (
    <div>
      <div className="mb-6">{renderTitle()}</div>
      <button
        className={`${styles.fullRoundButton} has-tooltip`}
        onMouseEnter={() => toggleTooltip(true)}
        onMouseLeave={() => toggleTooltip(false)}
      >
        <Link to={href}>
          <i className={`fas ${icon} mx-2`}></i>
        </Link>
      </button>
    </div>
  );
};
