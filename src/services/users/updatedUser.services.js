const bcrypt = require("bcrypt");
const User = require("../../models/user/createUser.models");

const updatedUserServices = async (
  { name, email, password, checkPassword },
  idUser
) => {
  const newUser = {
    name: name,
    email: email,
    updatedAt: new Date(),
  };

  if (password) {
    if (password !== checkPassword) {
      return { status: 400, error: "Senhas não conferem !" };
    } else if (password === checkPassword && password !== null) {
      const cryptoPassword = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, cryptoPassword);

      newUser.password = passwordHash;
    }
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: idUser },
      { $set: newUser },
      { new: true }
    );
    return {
      status: 200,
      message: "User updated successfully",
      data: updatedUser,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = updatedUserServices;
