const Product = require("../../models/product/createProduct.model");

const getProductsServices = async (id) => {
  try {
    const product = await Product.find({ userId: id });

    return { products: product };
  } catch (error) {
    console.log(error);
  }
};

module.exports = getProductsServices;
