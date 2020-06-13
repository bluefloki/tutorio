import React from "react";
import Navbar from "./Navbar";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h3 className="is-size-2 has-text-centered">Log In</h3>
        <div className="columns is-centered" style={{ marginTop: 50 }}>
          <div className="column is-half is-vcentered">
            <form>
              <div className="field">
                <label htmlFor="email" className="label has-text-white">
                  Email
                </label>
                <div className="control">
                  <input class="input" type="text" name="email" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="password" className="label has-text-white">
                  Password
                </label>
                <div className="control">
                  <input class="input" type="password" name="password" />
                </div>
              </div>
              <div className="field" style={{ marginTop: 20 }}>
                <button className="button is-primary" type="submit">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
