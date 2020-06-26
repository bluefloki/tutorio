import React from "react";
import { Route } from "react-router-dom";
import TutorNavbar from "./TutorNavbar";
import CreateLesson from "./CreateLesson";
import EditProfile from "../EditProfile";

export default function TutorDashboard() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <TutorNavbar />
        </div>
        <div className="col-span-3 p-6" style={{ height: "100vh" }}>
          <Route path="/tutors/editProfile" component={EditProfile} />
          <Route path="/tutors/createLesson" component={CreateLesson} />
        </div>
      </div>
    </div>
  );
}
