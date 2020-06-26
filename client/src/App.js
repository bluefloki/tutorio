import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Join from "./components/Join";
import Lessons from "./components/Lessons";
import TutorDashboard from "./components/Tutor/TutorDashboard";

export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="overflow-y-scroll bg-gray-500">
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/join" render={(props) => <Join {...props} />} />
          <Route
            path="/teach"
            render={(props) => <Join isTutor={true} {...props} />}
          />
          <Route path="/lessons" component={Lessons} />
        </div>
        {/*Tutor Routes */}
        <Route path="/tutors" component={TutorDashboard} />
      </Router>
    </GlobalProvider>
  );
}
