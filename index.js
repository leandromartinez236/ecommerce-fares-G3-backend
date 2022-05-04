const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const main = require("./server");
const productRoutes = require("./src/routes/products.routes");
const app = express();
main();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(productRoutes);

module.exports = app;
