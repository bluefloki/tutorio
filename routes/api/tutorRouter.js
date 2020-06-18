const express = require("express");
const router = express.Router();
const Tutor = require("../../database/models").Tutor;
const { checkAuthenticated } = require("./middleware/CheckAuthenticated");

router.get("/hello", checkAuthenticated, async (req, res) => {
  const { id } = req.user;
  const tutor = await Tutor.findOne({ where: { id: id } });
  res.json(tutor);
});

module.exports = router;
