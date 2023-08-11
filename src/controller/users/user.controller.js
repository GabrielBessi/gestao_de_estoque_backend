const createUserServices = require("../../services/users/createUser.services");
const loginUserServices = require("../../services/users/loginUser.services");
const updatedUserServices = require("../../services/users/updatedUser.services");

const createUserController = async (req, res) => {
  const dataUser = req.body;

  const createUser = await createUserServices(dataUser);

  return res.status(200).json(createUser);
};

const loginUserController = async (req, res) => {
  const user = req.body;

  const { status, message, token } = await loginUserServices(user);

  return res.status(status).json({ data: { message: message, token: token } });
};

const updatedUserController = async (req, res) => {
  const user = req.body;
  const idUser = req.user.id;

  const { status, message, error } = await updatedUserServices(user, idUser);

  return res.status(status).json({ data: { message: message, error: error } });
};

module.exports = {
  createUserController,
  loginUserController,
  updatedUserController,
};
