import React from "react";
import Navbar from "./Navbar";
import { LessonCard } from "./Lessons";
import { Link } from "react-router-dom";

export default function SingleTutor() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <figure className="image is-128x128">
          <img
            className="is-rounded"
            src={require("../assets/uploads/1.png")}
          />
        </figure>
        <div style={{ marginBottom: 55 }}>
          <h3 className="is-size-3 is-pulled-left">Meeran Kazmi</h3>
          <Link to="/message/1" className="button is-primary is-pulled-right">
            Message
          </Link>
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
        <h3 className="is-size-3">Lessons</h3>
        <div className="columns is-multiline">
          <LessonCard />
        </div>
      </div>
    </div>
  );
}
