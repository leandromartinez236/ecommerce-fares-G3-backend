import { DataTypes } from "sequelize";
import { sequelize } from "../data/db.js";
export const Product = sequelize.define("product", {
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
