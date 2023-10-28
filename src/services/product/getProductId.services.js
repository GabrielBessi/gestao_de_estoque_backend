const Product = require("../../models/product/createProduct.model");

const getProductIdServices = async (codeProduct, idUser) => {
  try {
    const product = await Product.findOne({
      code_product: codeProduct,
      userId: idUser,
    });

    if (!product) {
      return { status: 404, data: { message: "Product Not Found" } };
    }

    return { data: product };
  } catch (error) {
    console.log(error);
  }
};

module.exports = getProductIdServices;
