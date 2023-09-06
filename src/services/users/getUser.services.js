const User = require("../../models/user/createUser.models");

const getUserServices = async (userId) => {
  try {
    const user = await User.findOne({ _id: userId });

    return user;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getUserServices;
