import React from "react";
import TutorNavbar from "./TutorNavbar";
import { Route } from "react-router-dom";
import EditProfile from "./EditProfile";
import CreateLesson from "./CreateLesson";

export default function TutorDashboard() {
  return (
    <div>
      <div className="columns">
        <div className="column is-2">
          <TutorNavbar />
        </div>
        <div className="column">
          <Route path="/tutorDashboard/editProfile" component={EditProfile} />
          <Route path="/tutorDashboard/createLesson" component={CreateLesson} />
        </div>
      </div>
    </div>
  );
}
