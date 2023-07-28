const Product = require("../../models/product/createProduct.model");

const getProductIdServices = async (idProduct, idUser) => {
  try {
    const product = await Product.findOne({
      _id: idProduct,
      userId: idUser,
    });

    if (!product) {
      return { status: 400, data: { message: "Search error" } };
    }

    return { data: product };
  } catch (error) {
    console.log(error);
  }
};

module.exports = getProductIdServices;
