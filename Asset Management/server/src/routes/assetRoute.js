const express = require("express");
const {
  getAssets,
  getAsset,
  addAsset,
  updateAsset,
  deleteAsset,
} = require("../controllers/assetController");
const assetRouter = express.Router();

assetRouter.get("/", getAssets);
assetRouter.get("/:id", getAsset);
assetRouter.post("/", addAsset);
assetRouter.put("/:id", updateAsset);
assetRouter.delete("/:id", deleteAsset);

module.exports = assetRouter;
