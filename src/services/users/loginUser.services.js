const User = require("../../models/user/createUser.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginUserServices = async ({ email, password }) => {
  const user = await User.findOne({ email: email });

  if (!user) {
    return { status: 400, message: "Email or password invalid" };
  }

  const comparePass = await bcrypt.compare(password, user.password);

  if (!comparePass) {
    return { status: 400, message: "Email or password invalid" };
  }

  const token = jwt.sign(
    { name: user.name, id: user._id },
    process.env.KEYSECRET
  );

  return { status: 200, token: token, user: user };
};

module.exports = loginUserServices;
