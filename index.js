const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const routesCategories = require('./src/routes/categories.routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(routesCategories)


app.listen(3000);
console.log("Server is running at port 3000");

