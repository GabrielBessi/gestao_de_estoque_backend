const mongoose = require("mongoose");
const User = require("../../models/user/createUser.models");

const getUserServices = async (userId) => {
  try {
    const user = await User.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(userId) },
      },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "userId",
          as: "products",
        },
      },
    ])
      .then((result) => {
        if (result) {
          return result;
        } else if (result.length > 0) {
          return "Usuário encotrado:", result[0];
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return user;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getUserServices;
