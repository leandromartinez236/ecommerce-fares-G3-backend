const { Product } = require("../models/product");
const { Category } = require("../models/category");
const { Order } = require("../models/order");
const { LineOrder } = require("../models/lineOrder");
const { User } = require("../models/user");

//Category => Products
Product.hasMany(Category, { foreignKey: "productId" });
Category.belongsTo(Product);

//Order => User
Order.hasOne(User, { foreignKey: "orderId" });
User.belongsTo(Order);

//Order => LineOrder
Order.hasMany(LineOrder, { foreignKey: "orderId" });
LineOrder.belongsTo(Order);

//Product => LineOrder
Product.hasMany(LineOrder, { foreignKey: "productId" });
LineOrder.belongsTo(Product);
