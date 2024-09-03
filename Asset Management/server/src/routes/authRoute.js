const express = require("express");

const {
  login,
  register,
  processRegister,
} = require("../controllers/authController");

const authRouter = express.Router();

//Authentication

authRouter.post("/login", login);
authRouter.post("/register", processRegister);
// userRouter.post('/register', processRegister);



module.exports = authRouter;
