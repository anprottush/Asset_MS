const express = require("express");

const {
  login,
  register,
  processRegister,
  logout,
} = require("../controllers/authController");

const authRouter = express.Router();

//Authentication

authRouter.post("/login", login);
authRouter.post("/register", processRegister);
// userRouter.post('/register', processRegister);
authRouter.post("/logout", logout);


module.exports = authRouter;
