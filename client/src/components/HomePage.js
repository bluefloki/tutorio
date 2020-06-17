import React from "react";
import Navbar from "./Navbar";

export default function HomePage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("This works");
  };

  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h3 className="is-size-3 has-text-white" style={{ margin: 20 }}>
            Learn at your own pace with personal tutors
          </h3>
          <form onSubmit={handleSubmit} className="form-500">
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
      <div className="hero-foot has-text-centered"></div>
    </section>
  );
}
