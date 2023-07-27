const createUserServices = require("../../services/users/createUser.services");
const loginUserServices = require("../../services/users/loginUser.services");

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

module.exports = { createUserController, loginUserController };
