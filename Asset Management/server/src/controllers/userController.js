const createHttpError = require("http-errors");
const User = require("../models/userModel");
const { successResponse, errorResponse } = require("./responseController");

const { getById, getAll, remove } = require("../services/baseService");
const responseMessage = require("../messages/apiResponse");

const getUsers = async (req, res, next) => {
  try {
    const users = await getAll(User);

    return successResponse(res, {
      statusCode: 200,
      message: responseMessage.Retrive,
      payload: users,
    });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await getById(User, id);

    return successResponse(res, {
      statusCode: 200,
      message: responseMessage.Retrive,
      payload: user,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const options = { password: 0 };
    const user = await User.findById(id, options);

    return successResponse(res, {
      statusCode: 200,
      message: "Success! Data Retrieved Successfully.",
      payload: user,
    });
  } catch (error) {
    return errorResponse(res, { statusCode: 400, message: error.message });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const removeuser = await remove(User, id);

    return successResponse(res, {
      statusCode: 200,
      message: responseMessage.Delete_success,
      payload: removeuser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers, getUser, deleteUser };
