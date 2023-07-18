const AppError = require("../../errors/AppError");
const User = require("../../models/user/createUser.models");

const createUserServices = async ({ name, email, cnpj, password }) => {
  if (name == null || email == null || cnpj == null || password == null) {
    return error;
  }

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
    return error;
  }
};

module.exports = createUserServices;
