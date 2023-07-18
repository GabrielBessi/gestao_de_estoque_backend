const User = require("../models/user/createUser.models");

const checkUserExistsMiddleware = async (req, res, next) => {
  const { email } = req.body;

  const emailExists = await User.findOne({ email: email });

  if (emailExists) {
    return res.status(400).json({ error: "Usuário já existe" });
  }

  next();
};

module.exports = checkUserExistsMiddleware;
