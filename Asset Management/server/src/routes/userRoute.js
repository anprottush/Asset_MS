const express = require("express");
const {
  getUser,
  getUsers,
  deleteUser,
} = require("../controllers/userController");
const { isLoggedIn } = require("../middlewares/authMiddleware");

const userRouter = express.Router();

//User

userRouter.get("/", isLoggedIn, getUsers);
userRouter.get("/:id", getUser);
userRouter.delete("/:id", deleteUser);


module.exports = userRouter;
