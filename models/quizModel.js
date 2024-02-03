const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
  questions: [
    {
      type: {
        type: String,
        required: true,
      },
      difficulty: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      question: {
        type: String,
        required: true,
      },
      correct_answer: {
        type: String,
        required: true,
      },
      incorrect_answers: {
        type: [String],
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Results", resultSchema);
