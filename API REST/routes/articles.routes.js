const express = require("express");
const router = express.Router(); //permite definir rutas por separado y luego unirlas todas en el main de la aplicacion
const articlesController = require("../controllers/articles.controller"); //necesarias para controlar los requests y enviar respuestas

//definicion de rutas
router.get("/", articlesController.getArticles);
router.get("/:articleSlug", articlesController.getArticlesBySlug);
router.get("/id/:articleId", articlesController.getArticlesById);

//permite usar estas rutas en otros lados del proyecto
module.exports = router; 

//importar todo lo que este en la instancia local de router, osea toda la info