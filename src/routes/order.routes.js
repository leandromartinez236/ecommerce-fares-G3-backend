const router = require("express").Router();
const {
  getAllOrders,
  getOneOrder,
  updateOneOrder,
} = require("../controllers/order");

router.get("/orders", getAllOrders);
router.get("/orders/:id", getOneOrder);
router.put("/orders/:id", updateOneOrder);

module.exports = router
