const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JSON_SECRET_KEY } = require("./middleware/CheckAuthenticated");
const User = require("../../database/models").User;

//CREATE USERS
router.post("/register", async (req, res) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ ...req.body, password: hashedPassword });
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

//USER LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: req.body.email } });
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign({ email }, JSON_SECRET_KEY);
      res.status(201).json(accessToken);
    } else {
      res.status(400).json({ message: "Incorrect Password" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Cannot Find User" });
  }
});

//CREATE TUTOR

//TUTOR LOGIN

//GET ALL TUTORS

//GET ONE TUTOR

//GET ALL CLASSES

//GET ONE CLASS

module.exports = router;
