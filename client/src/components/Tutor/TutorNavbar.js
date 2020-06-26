import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";

export default function TutorNavbar() {
  const links = [
    { id: 1, title: "Edit Profile", href: "/tutors/editProfile" },
    { id: 2, title: "Create a Lesson", href: "/tutors/createLesson" },
  ];
  return (
    <div
      className="bg-gray-600 overflow-y-scroll p-6"
      style={{ height: "100vh" }}
    >
      <h3 className="text-3xl font-bold mb-6">Tutor Dashboard</h3>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id} className="mb-1">
              <Link to={link.href} className={`${styles.navLink} text-lg`}>
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
