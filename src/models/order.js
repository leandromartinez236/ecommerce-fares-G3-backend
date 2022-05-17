const sequelize = require("../data/db.js");
const { DataTypes } = require("sequelize");

const Order = sequelize.define("order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  state: {
    type: DataTypes.ENUM(
      "carrito",
      "creada",
      "procesando",
      "cancelada",
      "completa"
    ),
  },
});

module.exports = {
  Order  
}
