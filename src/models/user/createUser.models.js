const mongoose = require("mongoose");
const UserSchema = require("../../schemas/user/createUser.schemas");

const User = mongoose.model("User", UserSchema);

module.exports = User;
