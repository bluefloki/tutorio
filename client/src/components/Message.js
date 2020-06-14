import React, { useState } from "react";
import { socket } from "../App";
import Navbar from "./Navbar";

export default function Message() {
  let [messages, setMessages] = useState(["First dummy message"]);
  const [chatMessage, setChatMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("chatMessage", chatMessage);
    socket.on("sentMessage", (msg) => {
      setMessages([...messages, msg]);
    });
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        {messages.map((message) => (
          <p key={Math.random()} className="has-text-centered">
            {message}
          </p>
        ))}
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name" className="label has-text-white">
              Message <span className="has-text-info">*</span>
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="chatMessage"
                onChange={(e) => setChatMessage(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="button is-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
