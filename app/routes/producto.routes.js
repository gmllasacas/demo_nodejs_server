module.exports = app => {
  const productos = require("../controllers/producto.controller.js");

  var router = require("express").Router();

  router.get("/", productos.findAll);

  app.use('/api/productos', router);
};
