const express = require("express");
const router = express.Router();

//importar rutas de articulos creadas

const articlesRoutes = require("./articles.routes");
const authorsRoutes = require("./author.routes");
const categoriesRoutes = require("./categories.routes");

router.use("/articles", articlesRoutes); //agarrar todas las rutas con articles
router.use("/authors", authorsRoutes); //agarrar todas las rutas con articles
//colocar los nombres de las rutas en plural para que se entienda que se
//envia un conjunto de cosas, no afecta en logica ni nada
//pero lo hace mas entendible
router.use("/categories", categoriesRoutes);
module.exports = router;