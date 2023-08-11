const router = require("express");
const {
  createUserController,
  loginUserController,
  updatedUserController,
} = require("../../controller/users/user.controller");
const checkUserMiddleware = require("../../middleware/checkUsers.middleware");
const checkTokenProductsMiddleware = require("../../middleware/checkTokenProducts.middeware");

const userRouter = router();

userRouter.post("", checkUserMiddleware, createUserController);

userRouter.post("/login", loginUserController);

userRouter.patch("", checkTokenProductsMiddleware, updatedUserController);

module.exports = userRouter;
