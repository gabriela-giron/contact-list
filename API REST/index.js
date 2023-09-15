const express = require('express');
const app = express();
const router = express.Router();
const routes = require("./routes/index.routes"); //API REST estatica que va a traer todo de acuerdo a una etiqueta
//const {Articles, Authors, Categories} = require("./db/db"); //no es necesario escribir extensiones
const PORT = 3002; //puede ser cualquier puerto disponible
app.use("/simple-node-blog", routes); //ruta especifica para la api
module.exports = router;

/* const app = http.createServer((request,response) => {
    response.writeHead(200, {'Content-Type': 'application/json'}); //retornar info del json
    response.end(JSON.stringify(Articles));
}) //crear servidor web, fetch */

/* app.get("/", (request,response) => {
    response.send("mi primera aplicacion en node.js");
}) 

app.get("/articles", (request,response) => {
    response.send(Articles);
})

app.get("/authors", (req,res) => { //igual que request y response
    res.send(Authors);
})

app.get("/categories", (req,res) => {
    res.send(Categories);
}) */

//app.listen(PORT);
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
})


