import React from "react";
import TutorNavbar from "./TutorNavbar";
import { Route } from "react-router-dom";
import EditProfile from "./EditProfile";
import CreateLesson from "./CreateLesson";
import Chats from "../Chats";
import LessonRequest from "../LessonRequest";

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
          <Route path="/tutorDashboard/chats" component={Chats} />
          <Route
            path="/tutorDashboard/lessonRequests"
            component={LessonRequest}
          />
        </div>
      </div>
    </div>
  );
}
