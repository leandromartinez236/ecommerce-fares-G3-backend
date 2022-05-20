const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
require("./src/asociations/asociations");

const categoryRoutes = require("./src/routes/category.routes");
const productRoutes = require("./src/routes/products.routes");
const usersRoutes = require("./src/routes/user.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", usersRoutes);

app.listen(3000, () => console.log("Server corriendo"));
