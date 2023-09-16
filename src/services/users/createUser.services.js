const { AppError } = require("../../errors/AppError");
const User = require("../../models/user/createUser.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const createUserServices = async ({ name, email, cnpj, password }) => {
  const cryptoPassword = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, cryptoPassword);

  const user = new User({
    name: name,
    email: email,
    cnpj: cnpj,
    password: passwordHash,
    createdAt: new Date(),
  });

  try {
    const newUser = await user.save();

    const token = jwt.sign(
      {
        id: newUser._id,
        name: newUser.name,
      },
      process.env.KEYSECRET
    );

    return { token: token, user: newUser };
  } catch (error) {
    throw new AppError();
  }
};

module.exports = createUserServices;
