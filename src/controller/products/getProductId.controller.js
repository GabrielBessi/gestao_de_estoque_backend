const getProductIdServices = require("../../services/product/getProductId.services");

const getProductIdController = async (req, res) => {
  const codeProduct = req.params.codeProduct;
  const idUser = req.user.id;

  const { status, data } = await getProductIdServices(codeProduct, idUser);

  return res.status(status || 200).json(data);
};

module.exports = getProductIdController;
