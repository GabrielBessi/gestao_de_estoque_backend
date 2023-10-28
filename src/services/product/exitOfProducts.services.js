const Product = require("../../models/product/createProduct.model");

const exitOfProductsServices = async ({ code_product, quantity }) => {
  if (quantity === 0) {
    return {
      status: 400,
      message: { error: "Please enter a valid value" },
    };
  }

  const product = await Product.findOne({
    code_product: code_product,
  });

  if (product.quantity - quantity < 0) {
    return {
      status: 400,
      message: { error: "Insufficient quantity of products" },
    };
  }

  try {
    if (product) {
      const updatedProduct = await Product.updateOne(
        { code_product: code_product },
        { quantity: product.quantity - quantity }
      );

      return { status: 200, message: "Product atualized success" };
    } else {
      return { status: 404, message: "Product not found !" };
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = exitOfProductsServices;
