import React from "react";
import TutorNavbar from "./TutorNavbar";
import { Route } from "react-router-dom";

export default function TutorDashboard() {
  return (
    <div>
      <div className="columns">
        <div className="column is-2">
          <TutorNavbar />
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}
