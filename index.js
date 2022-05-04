const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const productRoutes = require("./src/routes/products.routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(productRoutes);

app.listen(3000, () => console.log("Server corriendo"));
