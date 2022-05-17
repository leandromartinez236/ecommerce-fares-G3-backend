const { Order } = require("../models/order");

const getAllOrders = async (req, res) => {
  try {
    const getAllOrders = await Order.findAll();
    res.status(200).json(getAllOrders);
  } catch (error) {
    console.log(error);
  }
};

const getOneOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const getOneOrder = await Order.findOne({
      where: { id },
    });
    res.status(200).json(getOneOrder);
  } catch (error) {
    console.log(error);
  }
};

const createOrder = async (req, res) => {
  const { state } = req.body;
  try {
    const example = await Order.create({state});
    res.status(200).json(example);
  } catch (error) {
    console.log(error);
  }
};

const updateOneOrder = async (req, res) => {
  const { id } = req.params;
  const { state } = req.body;
  try {
    const findCategory = await Order.findByPk(id);
    if (!findCategory || undefined)
      return res.status(400).json({ msg: "Order not found" });
    findCategory.state = state;
    await findCategory.save();
    res.status(200).json(findCategory);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllOrders,
  getOneOrder,
  createOrder,
  updateOneOrder,
};
