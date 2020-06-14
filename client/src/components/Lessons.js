import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Lessons() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="columns is-multiline">
          <LessonCard />
        </div>
      </div>
    </div>
  );
}

export const LessonCard = () => {
  return (
    <div className="column is-4">
      <Link to={`/lesson/${1}`} className="box has-text-black">
        <div className="columns">
          <div className="column is-3">
            <figure className="image">
              <img
                className="is-rounded"
                src={require("../assets/uploads/2.jpg")}
              />
            </figure>
          </div>
          <div className="column is-9">
            <p className="is-size-5">
              <strong className="has-text-black">Piano Masterclass</strong>
            </p>{" "}
            <br />
            <div>
              <p className="is-pulled-left">Music</p>
              <p className="is-pulled-right">4.0(579)</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
