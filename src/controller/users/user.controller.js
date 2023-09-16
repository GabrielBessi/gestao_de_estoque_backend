const createUserServices = require("../../services/users/createUser.services");
const getUserServices = require("../../services/users/getUser.services");

const loginUserServices = require("../../services/users/loginUser.services");

const createUserController = async (req, res) => {
  const dataUser = req.body;

  const createUser = await createUserServices(dataUser);

  return res.status(200).json(createUser);
};

const loginUserController = async (req, res) => {
  const loginUser = req.body;

  const { status, message, token, user } = await loginUserServices(loginUser);

  return res
    .status(status)
    .json({ user: user, message: message, token: token });
};

const getUserController = async (req, res) => {
  const user = req.user.id;

  const getUser = await getUserServices(user);

  return res.status(200).json(getUser);
};

module.exports = {
  createUserController,
  loginUserController,
  getUserController,
};
