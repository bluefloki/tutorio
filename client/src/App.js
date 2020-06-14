import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import io from "socket.io-client";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Classes from "./components/Classes";
import Tutors from "./components/Tutors";
import SingleTutor from "./components/SingleTutor";
import Lessons from "./components/Lessons";
import SingleLesson from "./components/SingleLesson";
import Message from "./components/Message";

export const socket = io.connect("http://localhost:5000");

// socket.on("message", (message) => console.log(message));

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/learn" component={Classes} />
      <Route path="/tutors" component={Tutors} />
      <Route path="/tutor/:id" component={SingleTutor} />
      <Route path="/lessons" component={Lessons} />
      <Route path="/lesson/:id" component={SingleLesson} />
      <Route path="/message/:id" component={Message} />
      <Route path="/register" component={SignUp} />
      <Route path="/login" component={Login} />
    </Router>
  );
}
