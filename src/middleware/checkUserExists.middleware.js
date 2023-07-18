const User = require("../models/user/createUser.models");

const checkUserExistsMiddleware = async (req, res, next) => {
  const { name, email, cnpj, password } = req.body;

  if (name == null || email == null || cnpj == null || password == null) {
    return res.status(400).json({ error: "Inválid data !" });
  }

  const emailExists = await User.findOne({ email: email });

  if (emailExists) {
    return res.status(400).json({ error: "User alreadys exists !" });
  }

  next();
};

module.exports = checkUserExistsMiddleware;
