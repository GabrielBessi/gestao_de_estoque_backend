const getProductIdServices = require("../../services/product/getProductId.services");

const getProductIdController = async (req, res) => {
  const idProduct = req.params.id;
  const idUser = req.user.id;

  const { status, data } = await getProductIdServices(idProduct, idUser);

  return res.status(status || 200).json(data);
};

module.exports = getProductIdController;
