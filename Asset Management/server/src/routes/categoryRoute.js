const express = require("express");
const {
  getCategories,
  getCategory,
  deleteCategory,
  addCategory,
  updateCategory,
} = require("../controllers/categoryController");
const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategory);
categoryRouter.post("/", addCategory);
categoryRouter.put("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);

module.exports = categoryRouter;
