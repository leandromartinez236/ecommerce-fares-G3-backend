const { Product } = require("../models/product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
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
const putProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, stock } = req.body;
    const product = await Product.findByPk(id);
    product.name = name;
    product.description = description;
    product.stock = stock;
    await product.save();

    res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// const getProductQuery = async (req, res) => {
//   try {
//     // const { name, description } = req.query;
//     // console.log(name, description);
//     console.log(req.query);
//     // const result = await Product.findByPk(id);
//     // res.status(200).json(result);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  putProduct,
  getOneProduct,
  // getProductQuery,
};
