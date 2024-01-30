const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
  amount: {
    type: "number",
    required: true,
  },
  category: {
    type: "string",
    required: true,
  },
  difficulty: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Quiz", quizSchema);
