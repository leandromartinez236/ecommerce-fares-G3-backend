const { ListOrder } = require('../models/listOrder')
const { Order } = require('../models/order')

//Borrar los modelos creado por los modelos que se vana utilizar 

const getItemCart = (req, res) => {
  const { idUser } = req.params
  try {
    const getItemCart = await User.findByPk({
      where: {id: idUser},
      include: { model: Order },
    })
    if(!getItemCart || undefined)
      return res.status(200).json({msg: 'User not found'})
    res.status(200).json(getItemCart)
  } catch (error) {
    console.log(error)
  }
}

const createItemCart = (req, res) => {
  const { idUser } = req.params
  const { quantity, stock } = req.body;
  try {
    const findUserExist = await ListOrder.findAll({
      where: {id: idUser}
    })
    if(!findUserExist || undefined)
      return res.status(200).json({msg: 'User not found'})
    const createItemCart = await Order.create({quantity, stock})
    res.status(200).json(createItemCart)
  } catch (error) {
    console.log(error)
  }
}

const deleteAllCart = (req, res) => {
  try {
    const deleteAllCart = await ListOrder.findAll()
    res.status(200).json(deleteAllCart)
  } catch (error) {
    console.log(error)
  }
}

const example = (req, res) => {
  try {
    const example = await ListOrder.findAll()
    res.status(200).json(example)
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  getItemCart,
  createItemCart,
  deleteAllCart
}