import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={HomePage} />
    </Router>
  );
}
