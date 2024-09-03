const createHttpError = require("http-errors");

const { successResponse, errorResponse } = require("./responseController");

const { getById, getAll, remove } = require("../services/baseService");
const responseMessage = require("../messages/apiResponse");
const Category = require("../models/categoryModel");

const getCategories = async (req, res, next) => {
  try {
    const categories = await getAll(Category);

    return successResponse(res, {
      statusCode: 200,
      message: responseMessage.Retrive,
      payload: categories,
    });
  } catch (error) {
    next(error);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const id = req.params.id;

    const category = await getById(Category, id);

    return successResponse(res, {
      statusCode: 200,
      message: responseMessage.Retrive,
      payload: category,
    });
  } catch (error) {
    next(error);
  }
};

const addCategory = async (req, res, next) => {
  try {
    const category = req.body;
    await insert(Category, category);

    return successResponse(res, {
      statusCode: 200,
      message: responseMessage.Save_success,
      payload: category,
    });
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req, res, next) => {
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

const deleteCategory = async (req, res, next) => {
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

module.exports = {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};
