const express = require("express");
const router = express.Router();
// const Lesson = require("../../database/models").Lesson;
const { checkAuthenticated } = require("./middleware/CheckAuthenticated");

//GET ALL LESSONS
router.get("/", async (req, res) => {
  const lessons = await Lesson.findAll();
  res.json(lessons);
});

//CREATE A LESSON
router.get("/", checkAuthenticated, async (req, res) => {
  try {
    console.log(req.body);
    res.json("Success");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
