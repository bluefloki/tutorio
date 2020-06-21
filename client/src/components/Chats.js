import React from "react";

export default function Chats() {
  return (
    <div>
      <div className="container">
        <h3 className="is-size-3 my-5 has-text-centered">Chats</h3>
        <div className="columns" style={{ minHeight: "70vh" }}>
          <div className="column is-3 has-background-dark">
            <form>
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="search"
                    placeholder="Search"
                  />
                </div>
                <div className="control">
                  <button type="submit" className="button is-primary">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="column is-9 has-background-white">
            <form>
              <div className="columns has-background-dark">
                <div className="column is-10">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="message"
                        placeholder="Message"
                      />
                    </div>
                  </div>
                </div>
                <div className="column has-text-right">
                  <button type="submit" className="button is-primary">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
