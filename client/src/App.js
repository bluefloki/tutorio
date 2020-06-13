import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}
