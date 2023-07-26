const router = require("express");
const createProductController = require("../../controller/products/createProduct.controller");
const checkTokenProductsMiddleware = require("../../middleware/checkTokenProducts.middeware");

const routerProduct = router();

routerProduct.post(
  "/new",
  checkTokenProductsMiddleware,
  createProductController
);

module.exports = routerProduct;
