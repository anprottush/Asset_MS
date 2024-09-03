const createHttpError = require("http-errors");
const mongoose = require("mongoose");

const getAll = async (Model) => {
  try {
    const allData = await Model.find();

    if (!allData) {
      throw createHttpError(404, `${Model.modelName} Not Found`);
    }

    return allData;
  } catch (error) {
    throw error;
  }
};

const getById = async (Model, id) => {
  try {
    const options = { password: 0 };
    const data = await Model.findById(id, options);

    if (!data) {
      throw createHttpError(404, `${Model.modelName} Not Found By This Id`);
    }

    return data;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      // throw createHttpError(400, "Bad Error Occured");
    }
    throw error;
  }
};

const insert = async (Model, data) => {
  try {
    await Model.create(data);
  } catch (error) {
    if (error instanceof mongoose.Error) {
      throw createHttpError(400, "Bad Error Occured");
    }
    throw error;
  }
};

const edit = async () => {
  try {
  } catch (error) {}
};

const remove = async (Model, id) => {
  try {
    const options = { password: 0 };
    const deleteData = await Model.findByIdAndDelete(id, options);

    return deleteData;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      throw createHttpError(400, `Invalid ${Model.modelName} Id`);
    }
    throw error;
  }
};

module.exports = { getAll, getById, insert, edit, remove };
