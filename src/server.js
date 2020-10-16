//importar pacote, biblioteca
const express = require("express");

const path = require("path");
const pages = require("./pages.js");
const server = express();
server
  .use(express.urlencoded({extended: true}))
  .use(express.static("public"))

  //configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //rotas
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage);

//ligar servidor
server.listen(5500);

//start servidor >> npm start
