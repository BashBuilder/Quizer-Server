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
  try {
    await Results.create(req.body);
    res.status(200), json({ success: "Results created successfully" });
  } catch (error) {
    res.status(401);
  }
};
module.exports.getAllQuiz = async (req, res) => {
  try {
    const { username } = req.body;
    console.log(username);
    const questions = await Results.find({ username });
    console.log(questions);
    res.status(200).json(questions);
  } catch (error) {
    console.error(error.message);
  }
};
