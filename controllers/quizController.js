const Results = require("../models/quizModel");
const { quizCategories } = require("../data/data");

module.exports.getQuiz = async (req, res) => {
  const { amount, category, difficulty, type } = req.body;
  try {
    const url = `${process.env.QUESTION_API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${quizCategories[category]}&type=${type}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
};

module.exports.submitResults = async (req, res) => {
  const quizResult = req.body;
  const submitted = await Results.create(quizResult);
  const { _id, category, score, totalQuestions } = submitted;
  res.status(200).json({ _id, category, score, totalQuestions });
};
