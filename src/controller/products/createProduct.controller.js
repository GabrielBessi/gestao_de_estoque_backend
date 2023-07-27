const createProductService = require("../../services/product/createProduct.services");

const createProductController = async (req, res) => {
  const newProduct = req.body;
  const id = req.user.id;

  const { message, status, data } = await createProductService(newProduct, id);

  return res.status(status || 200).json({ message: message || data });
};

module.exports = createProductController;
