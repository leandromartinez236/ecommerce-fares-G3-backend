const Product = require("../models/product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//name, description,price,stock
const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const newProduct = await Product.create({
      name,
      description,
      price,
      stock,
    });
    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getProducts,
  createProduct,
};
