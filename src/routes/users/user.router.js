const router = require("express");
const createUserController = require("../../controller/users/createUser.controller");
const checkUserExistsMiddleware = require("../../middleware/checkUserExists.middleware");

const userRouter = router();

userRouter.post("", checkUserExistsMiddleware, createUserController);

module.exports = userRouter;
