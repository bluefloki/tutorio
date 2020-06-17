import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
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
import AboutPage from "./components/AboutPage";
import TutorDashboard from "./components/tutors/TutorDashboard";

export const socket = io.connect("http://localhost:5000");

// socket.on("message", (message) => console.log(message));

export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/learn" component={Classes} />
        <Route path="/tutors" component={Tutors} />
        <Route path="/tutor/:id" component={SingleTutor} />
        <Route path="/lessons" component={Lessons} />
        <Route path="/lesson/:id" component={SingleLesson} />
        <Route path="/message/:id" component={Message} />
        <Route
          path="/register"
          render={(props) => <SignUp endpoint={"users"} {...props} />}
        />
        <Route
          path="/teach"
          render={(props) => <SignUp endpoint={"tutors"} {...props} />}
        />
        <Route
          path="/login"
          render={(props) => <Login endpoint={"login"} {...props} />}
        />
        <Route
          path="/tutorLogin"
          render={(props) => <Login endpoint={"tutors/login"} {...props} />}
        />
        {/*TUTOR ROUTES*/}
        <Route path="/tutorDashboard" component={TutorDashboard} />
      </Router>
    </GlobalProvider>
  );
}
