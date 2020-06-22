import React from "react";
import { styles } from "../styles";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function HomePage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this works");
  };

  return (
    <div style={{ height: "100vh" }}>
      <Navbar isHomePage />
      <div className="container mx-auto">
        <div className="text-center relative" style={{ top: "25vh" }}>
          <h3
            className="text-3xl font-semibold mb-2 mx-auto"
            style={{ width: 700 }}
          >
            Learn from anywhere, at your own pace, with personal tutors or
            classes of upto five.
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-6 mb-4">
              <input
                type="text"
                name="search"
                placeholder="I want to learn..."
                className={styles.inputField}
                style={{ width: "500px" }}
              />
            </div>
            <div>
              <button type="submit" className={styles.button}>
                Search <i className="fas fa-search ml-1"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
