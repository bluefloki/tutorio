import React, { useState } from "react";
import { styles } from "../styles";
import Navbar from "./Navbar";

export default function Lessons() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between">
          <h3 className="mt-6 mb-4 text-3xl font-semibold">Recent</h3>
          <form style={{ width: 200 }} className="flex flex-row items-center">
            <div>
              <input
                type="text"
                name="search"
                className={styles.inputField}
                placeholder="Search lessons..."
              />
            </div>
            <div>
              <button className={styles.button}>
                {" "}
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
        </div>

        <div className="container mx-auto">
          <LessonCard />
          <LessonCard />
          <LessonCard />
        </div>
      </div>
    </div>
  );
}

export const LessonCard = () => {
  const [details, toggleDetails] = useState(false);
  const renderDetails = () => {
    if (details) {
      return (
        <div className="py-6 px-6 border-b-2 border-gray-600">
          <div style={{ textAlign: "center" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-s68kHOnpiE"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h4 className="text-lg font-semibold py-2">Description</h4>
            <p>
              This is my course. I will teach you how to play the violin
              professionally. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Molestiae, explicabo in sit, repellendus nulla minima, ad
              quos numquam tenetur vero maxime saepe magni repellat debitis
              consequatur deleniti officiis? Soluta, quibusdam.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold py-2">Pricing</h4>
            <ul>
              <li>One-on-one = $65/hr</li>
              <li>Combined Class = $45/hr</li>
            </ul>
          </div>
          <div className="text-center mt-4">
            <button className={`${styles.button}`}>Request</button>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <div
        className="bg-white py-4 px-4 cursor-pointer border-b-2 border-gray-600"
        onClick={() => toggleDetails(!details)}
      >
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-1">
            <img
              src={require("../assets/projectImages/1.png")}
              className="h-16 w-16 rounded-full mx-auto"
            />
          </div>
          <div className="col-span-2">
            <h3 className="text-xl font-semibold">Violin Masterclass</h3>
            <p className="text-lg text-gray-700 pt-1">Meeran Kazmi</p>
          </div>
          <div className="text-center col-span-1">
            <h3 className="text-xl font-semibold">
              <i className="fas fa-star mr-2 text-yellow-500"></i>4.5(556)
            </h3>
            <p className="text-gray-700 pt-1">Urdu, English, German</p>
          </div>
          <div className="text-center col-span-1">
            <h3 className="text-xl font-semibold">$45-65</h3>
          </div>
          <div className="text-center col-span-1">
            <button className={`${styles.button}`}>Request</button>
          </div>
        </div>
      </div>
      {renderDetails()}
    </div>
  );
};
