const jwt = require("jsonwebtoken");
const JSON_SECRET_KEY =
  "b5ef2152106eb660e55508a1feb8b286a27d88b5debc4bec37eb5cb0d0cea492846e1a071fee837551f3b0ec623e2ffcedfe72f354ba062d2d7bb5d5f7d5e76f";

async function checkAuthenticated(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // The code before && means if it exists
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JSON_SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = { JSON_SECRET_KEY, checkAuthenticated };
