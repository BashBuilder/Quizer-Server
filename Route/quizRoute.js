const { Router } = require("express");
const quizController = require("../controllers/quizController");
const { requieAnth } = require("../middlewares/authMiddleware");

const router = Router();

router.use(requieAnth);
router.post("/submitResults", quizController.submitResults);
router.post("/getquiz", quizController.getQuiz);
router.get("/getquiz", function (req, res) {
  res.send("Welcome to get a quiz page");
});

module.exports = router;
