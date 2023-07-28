const getProductsServices = require("../../services/product/getProducts.services");

const getProductsController = async (req, res) => {
  const idUser = req.user.id;
  const products = await getProductsServices(idUser);

  return res.status(200).json(products);
};

module.exports = getProductsController;
