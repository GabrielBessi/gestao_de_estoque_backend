const updateProductServices = require("../../services/product/updateProduct.services");

const updateProductController = async (req, res) => {
  const idProduct = req.params.id;
  const idUser = req.user.id;
  const dataProduct = req.body;

  const product = await updateProductServices(dataProduct, idProduct, idUser);

  return res.status(201).json(product);
};

module.exports = updateProductController;
