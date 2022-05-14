const { Product } = require("../models/product");
const { Category } = require("../models/category");

Product.hasMany(Category, { foreignKey: "productId",  });

Category.belongsTo(Product);
