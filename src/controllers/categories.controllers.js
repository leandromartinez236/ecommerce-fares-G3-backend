const { Categories } = require("../models/categories");

const getOneCategory = async (req, res) => {
  const { nombreCat } = req.params;
  console.log('------------------',nombreCat, '------------------------')
  try {
    const createCategory = await Categories.findAll({ where: { nombreCat } });
    res.status(200).json(createCategory);
  } catch (error) {
    console.log(error);
  }
}


const createCategory = async (req, res) => {
  const { typeCategory } = req.body;
  try {
    const createCategory = await Categories.create({ typeCategory });
    res.status(200).json({ createCategory });
  } catch (error) {
    console.log(error);
  }
}

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteCategory = await Categories.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getOneCategory,
  createCategory,
  deleteCategory
}