const Quiz = require("../models/quizModel");

module.exports.getQuiz = async (req, res) => {
  res.json(req.params);
  res.status(200).json({ success: "yes getting quiz" });
};
