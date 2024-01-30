const jwt = require("jsonwebtoken");
const User = require("../models/userAuthModel");

module.exports.requieAnth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) res.status(401).json({ error: "Invalid authorization" });
  const token = authorization.split(" ")[1];
  try {
    const { id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id: id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request not authenticated" });
  }
};
