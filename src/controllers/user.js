const { User } = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const createUser = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    const newUser = await User.create({
      name,
      lastName,
      email,
      password,
    });
    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastName, email, password } = req.body;
    const user = await User.findByPk(id);
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// const getOrdersUser = async(req,res)=>{
//   const {id}= req.params
// }
module.exports = {
  getUsers,
  createUser,
  putUser,
  deleteUser,
  // getOrdersUser,
};
