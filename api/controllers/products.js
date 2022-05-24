const { Category } = require("../models/category");
const { Product } = require("../models/product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//BORRAR
const getProductCategory = async (req, res) => {
  try {
    const getProductCategory = await Product.findAll({
      include: { model: Category },
    });
    res.status(200).json(getProductCategory);
  } catch (error) {
    console.log(error);
  }
};

const getProductByCategory = async (req, res) => {
  const { nombreCat } = req.params;
  try {
    const getByCategory = await Category.findAll({
      where: { name: nombreCat },
      include: {
        model: Product,
        attributes: ["name", "description", "price", "stock"],
      },
      attributes: ["name", "description"],
    });
    res.status(200).json(getByCategory);
  } catch (error) {
    console.log(error);
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

const createCategoryProduct = async (req, res) => {
  const { idProduct, idCategory } = req.params;
  const { name, description } = req.body;
  try {
    const FindProduct = await Product.findAll({
      where: { id: idProduct },
    });
    if (FindProduct) {
      const createCategoryProduct = await Category.create({
        name,
        description,
        productId: idCategory,
      });
      return res.status(200).json(createCategoryProduct);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteCategoryProduct = async (req, res) => {
  const { idProduct, idCategory } = req.params;
  try {
    const deleteCategoryProduct = await Product.findAll({
      where: { id: idProduct },
      include: { model: Category },
    });
    if (deleteCategoryProduct) {
      await Category.destroy({ where: { id: idCategory } });
      return res.status(200).json(deleteCategoryProduct);
    }
  } catch (error) {
    console.log(error);
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

const getProductQuery = async (req, res) => {
  const { name } = req.query;
  const nameSpace = name.replace("%20", " ");
  try {
    const getProductQuery = await Product.findAll({
      where: { name: nameSpace },
      include: { model: Category },
    });
    if (!getProductQuery || undefined) {
      return res.status(400).json({ msg: "product not found" });
    }
    res.status(200).json(getProductQuery);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  putProduct,
  getOneProduct,
  getProductByCategory,
  deleteCategoryProduct,
  createCategoryProduct,
  getProductCategory,
  getProductQuery,
};
