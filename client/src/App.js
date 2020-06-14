import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import io from "socket.io-client";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Classes from "./components/Classes";
import Tutors from "./components/Tutors";

const socket = io.connect("http://localhost:5000");

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/learn" component={Classes} />
      <Route exact path="/tutors" component={Tutors} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}
