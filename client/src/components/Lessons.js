import React, { useState } from "react";
import Navbar from "./Navbar";
import LessonCard from "./LessonCard";

export default function Lessons() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="my-5">
          <h3 className="is-size-3 has-text-centered">Lessons</h3>
          <form>
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="search"
                  placeholder="Search"
                />
              </div>
              <div className="control">
                <button type="submit" className="button is-primary">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <LessonCard />
      </div>
    </div>
  );
}
