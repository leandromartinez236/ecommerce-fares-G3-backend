const { Category } = require("../models/category");

const getAllCategory = async (req, res) => {
  const { nombreCat } = req.params;
  try {
    const getOneCategory = await Category.findAll({ where: { nombreCat } });
    res.status(200).json(getOneCategory)
  } catch (error) {
    console.log(error);
  }
};

const createCategory = async (req, res) => {
  const { name, description, productId } = req.body;
  try {
    const createNewCategory = await Category.create({ name, description, productId });
    res.status(200).json(createNewCategory);
  } catch (error) {
    console.log(error);
  }
};

const updateOneCategory = async (req, res) => {
  const { id } = req.body
  const { name, description } = req.body;
  try {
    const update = await Category.findOne(id);

    update.name = name;
    update.description = description;
    await update.save();
    res.json(update);
  } catch (error) {
    console.log(error)
  }
}

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteOneCategory = await Category.findByPk({ where: { id } })
    res.status(204);
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getAllCategory,
  createCategory,
  updateOneCategory,
  deleteCategory,
};
