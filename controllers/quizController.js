const Quiz = require("../models/quizModel");
const { quizCategories } = require("../data/data");

module.exports.getQuiz = async (req, res) => {
  const { amount, category, difficulty, type } = req.body;
  // MAKE A FETCH REQUEST TO API
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
