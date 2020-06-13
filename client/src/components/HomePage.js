import React from "react";
import Navbar from "./Navbar";

export default function HomePage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("This works");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="columns has-text-centered is-vcentered">
          <div className="column is-6">
            <img src={require("../assets/hero.svg")} alt="" />
          </div>

          <div className="column is-6">
            <div>
              <h3
                className="has-text-centered is-size-3"
                style={{ margin: 50 }}
              >
                Learn at your own pace with personal tutors
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="search"
                      placeholder="I want to Learn..."
                    />
                  </div>
                </div>
                <div className="has-text-centered">
                  <button type="submit" className="button is-primary">
                    Go
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
