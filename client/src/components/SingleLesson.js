import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SingleTutor() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("This works");
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
      alert("Request Sent");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="columns is-paddingless" style={{ width: "100%" }}>
          <div className="column is-9 is-paddingless">
            <figure className="image">
              <img src={require("../assets/uploads/2.jpg")} className="" />
            </figure>
          </div>
          <div className="column has-background-dark has-text-white has-text-centered">
            <figure className="image is-128x128">
              <img
                src={require("../assets/uploads/1.png")}
                className="is-rounded"
              />
            </figure>
            <form onSubmit={handleSubmit} className="my-5">
              <button type="submit" className="button is-primary">
                Request Lesson
              </button>
            </form>
          </div>
        </div>
        <div style={{ marginBottom: 55 }}>
          <h3 className="is-size-3 is-pulled-left">Piano Masterclass</h3>
        </div>
        <div>
          <p className="is-pulled-left">Music</p>
          <p className="is-pulled-right">4.0(579)</p>
        </div>
        <br />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi
          quos velit laudantium non quae. Voluptas qui est, vel sunt veritatis
          impedit asperiores rerum assumenda dolor iure fugit id ipsam
          distinctio ratione veniam corrupti, eius et quae incidunt voluptatum
          quam dolorum! Totam officiis pariatur veniam sapiente neque recusandae
          ipsam eius praesentium optio non, et a temporibus modi sint ipsum ex
          accusamus architecto dolor? Enim reiciendis dolorum debitis, libero ea
          non cum architecto minima necessitatibus maiores repellat odit dolore
          minus praesentium corporis sit eligendi aperiam voluptatem ipsa
          aliquid eum est consequuntur unde veritatis? Animi cumque nisi alias,
          molestiae corrupti explicabo ex nam beatae quas aut error suscipit ad
          omnis sapiente laborum quaerat natus doloribus sit, molestias ratione
          at blanditiis quidem. Facilis pariatur alias esse dolorem eveniet
          ipsam laborum similique ducimus perspiciatis vero accusamus
          accusantium, repudiandae, nobis harum nisi aut commodi laudantium
          perferendis deserunt? Fugiat placeat, ab dolores ipsam aliquam quo
          vitae!
        </div>
      </div>
    </div>
  );
}
