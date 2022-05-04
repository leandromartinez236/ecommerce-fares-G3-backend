const {
  createCategory,
  getOneCategory,
  deleteCategory,
} = require("../controllers/categories.controllers");
const router = require("express").Router();

router.get("/products/category/:nombreCat", getOneCategory);

router.post("/products/category", createCategory);

router.delete("/products/category/:id", deleteCategory);

module.exports = router;
