const createProductService = require("../../services/product/createProduct.services");

const createProductController = async (req, res) => {
  const newProduct = req.body;

  const product = await createProductService(newProduct);

  return res.status(200).json(product);
};

module.exports = createProductController;
