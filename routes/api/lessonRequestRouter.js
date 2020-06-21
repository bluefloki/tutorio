const express = require("express");
const router = express.Router();
const LessonRequest = require("../../database/models").LessonRequest;
const { checkAuthenticated } = require("./middleware/CheckAuthenticated");

//CREATE LESSON REQUEST
router.post("/", checkAuthenticated, async (req, res) => {
  try {
    const { TutorId } = req.body;
    await LessonRequest.create({ TutorId, UserId: req.user.id });
    res.json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//ACCEPT LESSON REQUEST
router.patch("/:id", checkAuthenticated, async (req, res) => {
  try {
    await LessonRequest.update(
      { status: true },
      {
        where: {
          id: req.params.id,
          TutorId: req.user.id,
        },
      }
    );
    res.status(201).json({ message: "Success" });
    console.log("It has been set to true");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//GET LESSON REQUEST FOR TEACHER OR STRUDENT
router.get("/", checkAuthenticated, async (req, res) => {
  try {
    const { role, id } = req.user;
    if (role == "user") {
      const lessonReq = await LessonRequest.findAll({ where: { UserId: id } });
      res.status(201).json(lessonReq);
    } else if (role == "tutor") {
      const lessonReq = await LessonRequest.findAll({ where: { TutorId: id } });
      res.status(201).json(lessonReq);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
