const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
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

//LOGIN TO THE APP
router.post("/login", async (req, res) => {
  try {
    const { password } = req.body;
    const user = await User.findOne({ where: { email: req.body.email } });
    if (await bcrypt.compare(password, user.password)) {
      res.status(201).json(user);
    } else {
      res.status(400).json({ message: "Incorrect Password" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Cannot Find User" });
  }
});

module.exports = router;
