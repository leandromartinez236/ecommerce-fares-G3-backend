const router = require("express").Router();
const {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateOneCategory,
} = require("../controllers/category");

router.get("/products/categoria/:nombreCat", getAllCategory);
router.post("/products/category/", createCategory);
router.put("/products/category/:id", updateOneCategory);
router.delete("/products/category/:id", deleteCategory);

module.exports = router;
