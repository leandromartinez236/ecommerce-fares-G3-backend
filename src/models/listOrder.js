const sequelize = require("../data/db");
const { DataTypes } = require("sequelize");

const ListOrder = sequelize.define(
  "ListOrder",
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
  },
  {
    freezeTableName: true,
  }
);

module.exports = {
  ListOrder,
};
