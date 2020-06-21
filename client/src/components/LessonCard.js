import React, { useState } from "react";
import axios from "axios";

export default function LessonCard() {
  const [details, toggleDetails] = useState(false);
  const [loading, setLoading] = useState(false);

  //Button to send request
  const handleRequest = async () => {
    setLoading(true);
    try {
      await axios.post(
        "/api/v1/lessonRequests",
        { TutorId: 2 },
        {
          headers: {
            Authorization: `Bearer ${localStorage.accessToken}`,
          },
        }
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const LessonDetails = () => {
    if (details) {
      return (
        <div
          className="my-5 has-text-centered"
          style={{ width: "90%", margin: "auto" }}
        >
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WJ3-F02-F_Y"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            provident?
          </div>
          <button
            className={`button is-primary ${loading ? "is-loading" : ""}`}
            onClick={handleRequest}
          >
            Request Lesson
          </button>
        </div>
      );
    }
  };
  return (
    <div className="my-5">
      <div
        className="has-background-white"
        onClick={() => toggleDetails(!details)}
        style={{ cursor: "pointer" }}
      >
        <div className="columns px-4">
          <div className="column is-2">
            <figure className="image is-64x64">
              <img
                src={require("../assets/uploads/1.png")}
                className="is-rounded"
              />
            </figure>
          </div>
          <div className="column">
            <h4 className="is-size-4">
              <strong>Piano Masterclass</strong>
            </h4>
            <p>Meeran Kazmi</p>
          </div>
          <div className="column is-1 is-pulled-right">
            <h4 className="is-size-4">
              <strong>$25/hr</strong>
            </h4>
            <p>
              <i className="fas fa-star has-text-warning mr-1"></i>
              4.3(257)
            </p>
          </div>
        </div>
      </div>
      {LessonDetails()}
    </div>
  );
}
