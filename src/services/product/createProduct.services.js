const Product = require("../../models/product/createProduct.model");

const createProductService = async (
  { name_product, quantity, code_product, brand, model, description },
  id
) => {
  const newProduct = new Product({
    name_product: name_product,
    quantity: quantity,
    code_product: code_product,
    brand: brand,
    model: model,
    description: description,
    createdAt: new Date(),
    userId: id,
  });

  const productExist = await Product.findOne({ model: model });

  try {
    if (productExist) {
      const updatedProduct = await Product.updateOne(
        { model: model },
        { quantity: productExist.quantity + quantity }
      );

      return { message: "Product updated successfully" };
    }

    const checkCodeProduct = await Product.findOne({
      code_product: code_product,
    });

    if (checkCodeProduct) {
      return {
        status: 400,
        message: "There is already a product registered with this code",
      };
    }

    const product = await newProduct.save();

    return { data: product };
  } catch (error) {
    console.log(error);
  }
};

module.exports = createProductService;
