const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const categoryRoutes = require("./src/routes/category.routes");
const productRoutes = require("./src/routes/products.routes");
const usersRoutes = require("./src/routes/user.routes");
const orderRoutes = require('./src/routes/order.routes')

require("./src/asociations/asociations");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(categoryRoutes);
app.use(productRoutes);
app.use(usersRoutes);
app.use(orderRoutes);

app.listen(3000, () => console.log("Server corriendo"));
