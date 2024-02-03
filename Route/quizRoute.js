const { Router } = require("express");
const quizController = require("../controllers/quizController");
const { requieAnth } = require("../middlewares/authMiddleware");

const router = Router();

router.use(requieAnth);
router.post("/submitResults", quizController.submitResults);
router.post("/getquiz", quizController.getQuiz);
router.post("/getAllQuiz", quizController.getAllQuiz);

module.exports = router;
