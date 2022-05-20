const router = require("express").Router();
const {
  getAllOrders,
  getOneOrder,
  createOrder,
  updateOneOrder,
} = require("../controllers/order");

router.get("/orders", getAllOrders);
router.post("/orders", createOrder);
router.get("/orders/:id", getOneOrder);
router.put("/orders/:id", updateOneOrder);

module.exports = router
