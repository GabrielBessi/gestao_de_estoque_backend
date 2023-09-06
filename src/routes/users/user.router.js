const router = require("express");
const {
  createUserController,
  loginUserController,
  getUserController,
} = require("../../controller/users/user.controller");
const checkUserMiddleware = require("../../middleware/checkUsers.middleware");
const checkTokenProductsMiddleware = require("../../middleware/checkTokenProducts.middeware");

const userRouter = router();

userRouter.post("", checkUserMiddleware, createUserController);

userRouter.get("", checkTokenProductsMiddleware, getUserController);

userRouter.post("/login", loginUserController);

module.exports = userRouter;
