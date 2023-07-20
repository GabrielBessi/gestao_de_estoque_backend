const { AppError } = require("../../errors/AppError");
const User = require("../../models/user/createUser.models");

const createUserServices = async ({ name, email, cnpj, password }) => {
  const user = new User({
    name: name,
    email: email,
    cnpj: cnpj,
    password: password,
    createdAt: new Date(),
  });

  try {
    const newUser = await user.save();

    return newUser;
  } catch (error) {
    throw new AppError();
  }
};

module.exports = createUserServices;
