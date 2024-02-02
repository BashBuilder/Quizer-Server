const { Router } = require("express");
const quizController = require("../controllers/quizController");
const { requieAnth } = require("../middlewares/authMiddleware");

const router = Router();

router.use(requieAnth);
router.post("/submitResults", quizController.submitResults);
router.post("/getquiz", quizController.getQuiz);
router.get("/getAllQuiz", quizController.getAllQuiz);

module.exports = router;
