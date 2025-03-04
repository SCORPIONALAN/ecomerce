import express from "express";

import { deleteProducts, getProducts, postProducts, putProducts } from "../controllers/producto.controller.js";

const router = express.Router();

//endpoint para traer todos los productos de la base de datos
router.get('/', getProducts)

// Creacion de productos dentro de la API
router.post("/", postProducts);

//Forma de eliminar
router.delete("/:id", deleteProducts);

//Actualizar un producto
router.put("/:id", putProducts);

export default router;