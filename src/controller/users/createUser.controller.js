const createUserServices = require("../../services/users/createUser.services");

const createUserController = async (req, res) => {
  const dataUser = req.body;
  try {
    const createUser = await createUserServices(dataUser);

    return res.status(200).json(createUser);
  } catch (error) {
    return res.status(400).json({ message: "Dados inválidos" });
  }
};

module.exports = createUserController;
