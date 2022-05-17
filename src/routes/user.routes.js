const router = require("express").Router();
const {
  getUsers,
  createUser,
  putUser,
  deleteUser,
  // getOrdersUser,
} = require("../controllers/user");

router.get("/users", getUsers);
// router.get("/users/:id/orders", getOrdersUser);
router.post("/users", createUser);
router.put("/users/:id", putUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
