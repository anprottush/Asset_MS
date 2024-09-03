const express = require("express");
const {
  seedUser,
  seedCategory,
  seedAsset,
} = require("../controllers/seedController");
const seedRouter = express.Router();

seedRouter.get("/user", seedUser);
seedRouter.get("/category", seedCategory);
seedRouter.get("/asset", seedAsset);

module.exports = seedRouter;
