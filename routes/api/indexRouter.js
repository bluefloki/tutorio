const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JSON_SECRET_KEY } = require("./middleware/CheckAuthenticated");
const User = require("../../database/models").User;
const Tutor = require("../../database/models").Tutor;

//CREATE USERS
router.post("/users", async (req, res) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ ...req.body, password: hashedPassword });
    console.log("User created");
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
      const accessToken = jwt.sign({ email, id: user.id }, JSON_SECRET_KEY);
      res.status(201).json({ accessToken, name: user.name, role: "user" });
    } else {
      res.status(400).json({ message: "Incorrect Password" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Cannot Find User" });
  }
});

//CREATE TUTOR
router.post("/tutors", async (req, res) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await Tutor.create({ ...req.body, password: hashedPassword });
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//UPDATE TUTOR

//TUTOR LOGIN
router.post("/tutors/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const tutor = await Tutor.findOne({ where: { email: req.body.email } });
    if (await bcrypt.compare(password, tutor.password)) {
      const accessToken = jwt.sign({ email, id: tutor.id }, JSON_SECRET_KEY);
      res.status(201).json({ accessToken, name: tutor.name, role: "tutor" });
    } else {
      res.status(400).json({ message: "Incorrect Password" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Cannot Find User" });
  }
});

//GET ALL TUTORS
router.get("/tutors", async (req, res) => {
  try {
    const allTutors = await Tutor.findAll();
    res.status(200).json(allTutors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//GET ONE TUTOR

//GET ALL CLASSES

//GET ONE CLASS

module.exports = router;
