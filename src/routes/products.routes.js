import { Router } from "express";
import { createProduct, getProducts } from "../controllers/products";

const app = Router();

app.get("/products", getProducts);
app.post("/products", createProduct);
// app.put("/products");
// app.delete("/products");
