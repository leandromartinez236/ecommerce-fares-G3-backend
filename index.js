const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const categoryRoutes = require("./api/routes/category.routes");
const productRoutes = require("./api/routes/products.routes");
const usersRoutes = require("./api/routes/user.routes");
const orderRoutes = require("./api/routes/order.routes");

require("./api/asociations/asociations");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", usersRoutes);
app.use("/api", orderRoutes);

app.listen(3000, () => console.log("Server corriendo"));
