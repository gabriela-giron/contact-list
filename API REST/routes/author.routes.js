const express = require("express");
const router = express.Router(); //permite definir rutas por separado y luego unirlas todas en el main de la aplicacion
const authorsController = require("../controllers/authors.controller"); //necesarias para controlar los requests y enviar respuestas

//definicion de rutas
router.get("/", authorsController.getAuthors);
//ruta para buscar autor por id
router.get("/id/:authorId", authorsController.getAuthorsById);
//cuando se ingrese esto en el url, no coloques los :, solo el valor y ya, sino lo toma como parametro tambien
router.get("/create/:authors_name/:authors_last", authorsController.createAuthor);
//permite usar estas rutas en otros lados del proyecto
module.exports = router; 

//importar todo lo que este en la instancia local de router, osea toda la info