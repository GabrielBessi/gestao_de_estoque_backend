const createUserServices = require("../../services/users/createUser.services");

const createUserController = async (req, res) => {
  const dataUser = req.body;

  const createUser = await createUserServices(dataUser);

  return res.status(200).json(createUser);
};

module.exports = createUserController;
