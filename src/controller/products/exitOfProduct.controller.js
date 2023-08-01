const exitOfProductsServices = require("../../services/product/exitOfProducts.services");

const exitOfProductsController = async (req, res) => {
  const code = req.body;

  const { status, message } = await exitOfProductsServices(code);

  return res.status(status).json({ message: message });
};

module.exports = exitOfProductsController;
