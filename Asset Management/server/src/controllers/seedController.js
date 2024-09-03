const User = require("../models/userModel");
const data = require("../data");
const { successResponse, errorResponse } = require("./responseController");
const Category = require("../models/categoryModel");
const Asset = require("../models/assetModel");

const seedUser = async (req, res, next) => {
  try {
    await User.deleteMany({});
    const user = await User.insertMany(data.Users);

    return successResponse(res, {
      statusCode: 201,
      message: "success",
      payload: user,
    });
  } catch (error) {
    return errorResponse(res, { statusCode: 400, message: error.message });
  }
};

const seedCategory = async (req, res, next) => {
  try {
    await Category.deleteMany({});
    const category = await Category.insertMany(data.Category);

    return successResponse(res, {
      statusCode: 201,
      message: "success",
      payload: category,
    });
  } catch (error) {
    return errorResponse(res, { statusCode: 400, message: error.message });
  }
};

const seedAsset = async (req, res, next) => {
  try {
    await Asset.deleteMany({});
    const asset = await Asset.insertMany(data.Asset);

    return successResponse(res, {
      statusCode: 201,
      message: "success",
      payload: asset,
    });
  } catch (error) {
    return errorResponse(res, { statusCode: 400, message: error.message });
  }
};
module.exports = { seedUser, seedCategory, seedAsset };
