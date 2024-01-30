const Quiz = require("../models/quizModel");
const { quizCategories } = require("../data/data");

module.exports.getQuiz = async (req, res) => {
  const { amount, category, difficulty, type } = req.body;

  const API_ENDPOINT = "https://opentdb.com/api.php?";
  // const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${quizCategories[category]}&type=${type}`;
  const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=30&type=multiple`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  res.status(200).json(data);
};
