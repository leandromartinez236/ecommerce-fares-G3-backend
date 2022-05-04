const router = require("express").Router();
// import { createProduct, getProducts } from "../controllers/products";
const { createProduct, getProducts } = require("../controllers/products");

router.get("/products", getProducts);
router.post("/products", createProduct);
// router.put("/products");
// router.delete("/products");
module.exports = router;
