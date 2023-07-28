const Product = require("../../models/product/createProduct.model");

const getProductsServices = async (id) => {
  try {
    const product = await Product.find({ userId: id });

    return { data: product };
  } catch (error) {
    console.log(error);
  }
};

module.exports = getProductsServices;
