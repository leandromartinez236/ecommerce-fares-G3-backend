const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/db.js");
const Product = sequelize.define("product", {
  //name, description,price,stock,image,category
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
  },
});
module.exports = {
  Product,
};
