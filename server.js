const express = require("express");
const app = express();
const http = require("http").createServer(app);
const socketio = require("socket.io");
const io = socketio(http);

//Middleware
app.use(express.json());
// const fileUpload = require("express-fileupload");
// app.use(fileUpload());
// const path = require("path");
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

//Routes
app.use("/api/v1", require("./routes/api/indexRouter"));

//Static files
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

io.on("connection", (socket) => {
  console.log("New web socket connection");
});

const port = 5000 || process.env.PORT;
http.listen(port, () => console.log(`App is running on port ${port}`));
