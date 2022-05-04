const router = require("express").Router();
const {
  createProduct,
  getProducts,
  deleteProduct,
  putProduct,
  getOneProduct,
  // getProductQuery,
} = require("../controllers/products");

router.get("/products", getProducts);
router.post("/products", createProduct);
router.put("/products/:id", putProduct);
router.delete("/products/:id", deleteProduct);
router.get("/products/:id", getOneProduct);
// router.get("/products", getProductQuery);
module.exports = router;
