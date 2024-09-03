const mongoose = require("mongoose");
const secretData = require("../secret");

const connection = secretData.db.mongodbURL;

const connectDB = async () => {
  try {
    await mongoose
      .connect(connection)
      .then(() => {
        console.log("Connection is successfully established");
      })
      .catch((error) => {
        console.log("Connection is failed");
        console.error(error);
      });
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
