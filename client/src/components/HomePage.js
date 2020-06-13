import React from "react";

export default function HomePage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("This works");
  };

  return (
    <div style={{ position: "relative", top: "10vh" }}>
      <h1 className="has-text-centered is-size-1" style={{ margin: 50 }}>
        Tutorio.io
      </h1>
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
            Learn
          </button>
        </div>
      </form>
    </div>
  );
}
