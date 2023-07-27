const router = require("express");
const {
  createUserController,
  loginUserController,
} = require("../../controller/users/user.controller");
const checkUserMiddleware = require("../../middleware/checkUsers.middleware");

const userRouter = router();

userRouter.post("", checkUserMiddleware, createUserController);

userRouter.post("/login", loginUserController);

module.exports = userRouter;
