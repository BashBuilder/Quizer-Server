const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userAuthSchema = new mongoose.Schema({
  username: {
    type: "string",
    required: true,
    unique: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

userAuthSchema.statics.signup = async function (email, password, username) {
  if (!email || !password) throw Error("All fields must be filled");
  if (!validator.isEmail(email)) throw Error("Email is not valid");
  if (!validator.isStrongPassword(password))
    throw Error("Password not strong enough");
  const exists =
    (await this.findOne({ email })) || (await this.findOne({ username }));
  if (exists) throw Error("User already exist");
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ username, email, password: hash });
  return user;
};

userAuthSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error("All fields must be filled");
  const userEmail = await this.findOne({ email });
  if (!userEmail) {
    const userUsername = await this.findOne({ username: email });
    if (!userUsername) throw Error("Invalid User");
    const match = await bcrypt.compare(password, userUsername.password);
    if (!match) throw Error("Either email or password is incorrect");
    return userUsername;
  }

  const match = await bcrypt.compare(password, userEmail.password);
  if (!match) throw Error("Either email or password is incorrect");

  return userEmail;
};

module.exports = mongoose.model("User", userAuthSchema);
