const createHttpError = require("http-errors");

const { successResponse, errorResponse } = require("./responseController");

const { getById, getAll, remove, insert } = require("../services/baseService");
const responseMessage = require("../messages/apiResponse");
const Asset = require("../models/assetModel");

const getAssets = async (req, res, next) => {
  try {
    const assets = await getAll(Asset);

    return successResponse(res, {
      statusCode: 200,
      message: responseMessage.Retrive,
      payload: assets,
    });
  } catch (error) {
    next(error);
  }
};

const getAsset = async (req, res, next) => {
  try {
    const id = req.params.id;

    const asset = await getById(Asset, id);

    return successResponse(res, {
      statusCode: 200,
      message: responseMessage.Retrive,
      payload: asset,
    });
  } catch (error) {
    next(error);
  }
};

const addAsset = async (req, res, next) => {
  try {
    const asset = req.body;
    await insert(Asset, asset);

    return successResponse(res, {
      statusCode: 200,
      message: responseMessage.Save_success,
      payload: asset,
    });
  } catch (error) {
    next(error);
  }
};

const updateAsset = async (req, res, next) => {
  try {
    const id = req.params.id;
    const options = { password: 0 };
    const asset = await User.findById(id, options);

    return successResponse(res, {
      statusCode: 200,
      message: "Success! Data Retrieved Successfully.",
      payload: user,
    });
  } catch (error) {
    return errorResponse(res, { statusCode: 400, message: error.message });
  }
};

const deleteAsset = async (req, res, next) => {
  try {
    const id = req.params.id;
    const removeasset = await remove(Asset, id);

    return successResponse(res, {
      statusCode: 200,
      message: responseMessage.Delete_success,
      payload: removeasset,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAssets, getAsset, addAsset, updateAsset, deleteAsset };
