const User = require("../models/user/createUser.models");

const checkUserMiddleware = async (req, res, next) => {
  const { name, email, cnpj, password, checkPassword } = req.body;

  if (name == null || email == null || cnpj == null || password == null) {
    return res.status(400).json({ error: "Inválid data !" });
  }

  if (password !== checkPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  const emailExists = await User.findOne({ email: email });
  const cnpjExists = await User.findOne({ cnpj: cnpj });

  if (emailExists) {
    return res.status(400).json({ error: "User alreadys exists !" });
  }

  if (cnpjExists) {
    return res.status(400).json({ error: "CNPJ já cadastrado !" });
  }

  next();
};

module.exports = checkUserMiddleware;
