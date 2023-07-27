const createUserServices = require("../../services/users/createUser.services");
const loginUserServices = require("../../services/users/loginUser.services");

const createUserController = async (req, res) => {
  const dataUser = req.body;

  const createUser = await createUserServices(dataUser);

  return res.status(200).json(createUser);
};

const loginUserController = async (req, res) => {
  const user = req.body;

  const { status, message } = await loginUserServices(user);
  console.log(status, message);

  return res.status(status).json({ token: message });
};

module.exports = { createUserController, loginUserController };
