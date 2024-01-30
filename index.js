const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
// import the various non configuration import
const userAuth = require("./Route/userAuthRoute");
const userQuiz = require("./Route/quizRoute");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT), console.log("App is listerning"))
  .catch((error) => console.error(error.message));

app.use("/api/quizer/user", userAuth);
app.use("/api/quizer/", userQuiz);

app.get("/", (req, res) => {
  res.status(200).json({ home: "Welcome to the Quizer backend server!" });
});
