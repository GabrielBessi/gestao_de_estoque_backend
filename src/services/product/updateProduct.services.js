const Product = require("../../models/product/createProduct.model");

const updateProductServices = async (
  { name_product, quantity, brand, model, description },
  idProduct,
  idUser
) => {
  const updateProduct = {
    name_product: name_product,
    quantity: quantity,
    brand: brand,
    model: model,
    description: description,
    updatedAt: new Date(),
  };

  try {
    const product = await Product.findOneAndUpdate(
      { _id: idProduct, userId: idUser },
      { $set: updateProduct }
    );

    return { message: "Successfully updated product" };
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateProductServices;
