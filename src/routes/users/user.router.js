const router = require("express");
const createUserController = require("../../controller/users/createUser.controller");
const checkUserMiddleware = require("../../middleware/checkUsers.middleware");

const userRouter = router();

userRouter.post("", checkUserMiddleware, createUserController);

module.exports = userRouter;
