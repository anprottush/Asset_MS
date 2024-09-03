const express = require("express");
const {
  getUser,
  getUsers,
  deleteUser,
} = require("../controllers/userController");

const userRouter = express.Router();

//User

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.delete("/:id", deleteUser);


module.exports = userRouter;
