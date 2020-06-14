import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Tutors() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-4">
            <Link to={`/tutor/${1}`} className="box has-text-black">
              <div className="columns">
                <div className="column is-3">
                  <figure className="image">
                    <img
                      className="is-rounded"
                      src={require("../assets/uploads/1.png")}
                    />
                  </figure>
                </div>
                <div className="column is-9">
                  <p className="is-size-5">
                    <strong className="has-text-black">Meeran Kazmi</strong>
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
        </div>
      </div>
    </div>
  );
}
