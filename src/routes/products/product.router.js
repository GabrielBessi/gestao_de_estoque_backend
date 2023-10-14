const router = require("express");
const createProductController = require("../../controller/products/createProduct.controller");
const checkTokenProductsMiddleware = require("../../middleware/checkTokenProducts.middeware");
const getProductsController = require("../../controller/products/getProducts.controller");
const getProductIdController = require("../../controller/products/getProductId.controller");
const updateProductController = require("../../controller/products/updateProduct.controller");
const exitOfProductsController = require("../../controller/products/exitOfProduct.controller");

const routerProduct = router();

routerProduct.post(
  "/new",
  checkTokenProductsMiddleware,
  createProductController
);

routerProduct.get("", checkTokenProductsMiddleware, getProductsController);
routerProduct.get(
  "/:codeProduct",
  checkTokenProductsMiddleware,
  getProductIdController
);
routerProduct.patch(
  "/exit-of-products",
  checkTokenProductsMiddleware,
  exitOfProductsController
);

routerProduct.patch(
  "/:id",
  checkTokenProductsMiddleware,
  updateProductController
);

module.exports = routerProduct;
