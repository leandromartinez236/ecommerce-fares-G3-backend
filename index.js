const express = require("express");
const morgan = require("morgan");
require('dotenv').config();
const main = require('./server')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

main

module.exports = {
  app
};
