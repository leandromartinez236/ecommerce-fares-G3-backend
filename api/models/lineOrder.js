const sequelize = require("../data/db");
const { DataTypes } = require("sequelize");

const LineOrder = sequelize.define(
  "lineOrder",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
  }, {
    updatedAt: false,
    createdAt: false
  }
);

module.exports = {
  LineOrder,
};
