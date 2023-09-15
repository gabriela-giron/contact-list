const express = require("express");
const router = express.Router(); //permite definir rutas por separado y luego unirlas todas en el main de la aplicacion
const categoriesController = require("../controllers/categories.controller"); //necesarias para controlar los requests y enviar respuestas

//definicion de rutas
router.get("/", categoriesController.getCategories);
router.get("/id/:categoryId", categoriesController.getCategoryById);
router.get("/create/:new_category", categoriesController.createCategory);
module.exports = router; 

//importar todo lo que este en la instancia local de router, osea toda la info