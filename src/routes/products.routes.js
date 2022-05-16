const router = require("express").Router();
const {
  createProduct,
  getProducts,
  deleteProduct,
  putProduct,
  getOneProduct,
  getProductByCategory,
  getProductCategory,
  deleteCategoryProduct,
  createCategoryProduct,
  getProductQuery,
} = require("../controllers/products");

router.get("/products", getProducts);
router.get("/products", getProductQuery);
router.get("/products/:id", getOneProduct);
router.get("/products/category", getProductCategory);
router.get("/products/category/:nombreCat", getProductByCategory);

router.post("/products", createProduct);
router.post("/products/:idProduct/category/:idCategory", createCategoryProduct);

router.put("/products/:id", putProduct);

router.delete("/products/:id", deleteProduct);
router.delete(
  "/products/:idProduct/category/:idCategory",
  deleteCategoryProduct
);
module.exports = router;
