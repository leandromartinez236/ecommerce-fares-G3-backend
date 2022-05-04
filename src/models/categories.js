const sequelize = require("../data/db");
const { DataTypes } = require("sequelize");

const Categories = sequelize.define("categories", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  typeCategory: {
    type: DataTypes.ENUM(
      "pc-armada",
      "hardware"
      // "perifericos",
      // "notebooks",
      // "monitores",
      // "impresoras",
      // "telefonos",
      // "camaras",
      // "drones"
    ),
    defaultValue: "pending",
    allowNull: false,
  },
});

module.exports = {
  Categories,
};
