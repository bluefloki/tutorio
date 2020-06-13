const express = require("express");
const app = express();

//Middleware
app.use(express.json());
// const fileUpload = require("express-fileupload");
// app.use(fileUpload());
// const path = require("path");
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

//Routes

//Static files
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`App is running on port ${port}`));
