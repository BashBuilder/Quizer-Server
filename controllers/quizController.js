const Results = require("../models/quizModel");
const { quizCategories } = require("../data/data");

// Get quiz from api endpoint
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

// Calculate user Score and upload it to database
module.exports.submitResults = async (req, res) => {
  try {
    const { username, answers, questions } = req.body;
    const correctAnswer = questions.map((item, index) => ({
      number: index + 1,
      answer: item.correct_answer,
    }));

    const category = questions[0].category;
    const score = correctAnswer.reduce((acc, ans) => {
      const matchingAnswer = answers.find(
        (userAnswer) => userAnswer.number === ans.number
      );
      if (matchingAnswer && ans.answer === matchingAnswer.answer) {
        return acc + 1;
      }
      return acc;
    }, 0);
    const uploadQuiz = {
      username,
      category,
      score,
      questions,
    };
    await Results.create(uploadQuiz);
    res.status(200).json({
      category,
      score,
      attempts: answers.length,
      TotalQuestions: questions.length,
      correctAnswer,
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// get all results for a user
module.exports.getAllQuiz = async (req, res) => {
  try {
    const { username } = req.body;
    // const questions = await Results.find({ username });
    const questions = await Results.find({ username }).sort({ createdAt: -1 });
    res.status(200).json(questions);
  } catch (error) {
    console.error(error.message);
  }
};
