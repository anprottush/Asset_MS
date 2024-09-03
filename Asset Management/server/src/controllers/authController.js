const createHttpError = require("http-errors");
const bcrypt = require("bcrypt");
const responseMessage = require("../messages/apiResponse");
const User = require("../models/userModel");
const { successResponse } = require("./responseController");
const { generateToken } = require("../config/jwt");
const secretData = require("../secret");
const { emailSend } = require("../config/email");
const { insert } = require("../services/baseService");

const login = async (req, res, next) => {
  try {
    const data = req.body;
    const email = data.email;
    const password = data.password;

    const user = await User.findOne({ email: email });

    if (!user) {
      throw createHttpError(404, "User does not exist. Please register first");
    } else {
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        throw createHttpError(401, "Email and password does not match");
      }

      const token = generateToken({ email });

      res.cookie('access_token', token, {
        maxAge: 15 * 60 * 1000, //15 minutes
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });

      return successResponse(res, {
        statusCode: 200,
        message: "User logged in successfully",
        payload: {
          token: token,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};


const processRegister = async (req, res, next) => {
  try {
    const data = req.body;
    const email = data.email;

    const existsData = await User.exists({ email: email });
    if (existsData) {
      throw createHttpError(409, "User already exists. please login");
    } else {
      //const token = generateToken(data);
      await insert(User, data);

      // const emailData = {
      //   email,
      //   subject: "Account Activation Email",
      //   // text: "Hello world?",
      //   html: `
      //      <h2>Hello ${user.name} !</h2>
      //      <p>Please click here to
      //      <a href="${secretData.clientURL}/user/activate/${token}" target="_blank">
      //      active your account</a></p>
      //   `,
      // };

      // try {
      //   await emailSend(emailData);
      // } catch (error) {
      //   next(createHttpError(500, "Failed to send verification email"));
      //   return;
      // }

      // return successResponse(res, {
      //   statusCode: 200,
      //   message: `Please go to your ${email} for completing registration process`,
      //   payload: {
      //     data: user,
      //     token: token,
      //   },
      // });

      return successResponse(res, {
        statusCode: 201,
        message: "Account created successfully",
        payload: data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie('access_token');


    return successResponse(res, {
          statusCode: 200,
          message: "User logged out successfully",
        });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, processRegister,logout };
