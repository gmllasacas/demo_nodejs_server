module.exports = app => {
  const entregas = require("../controllers/entrega.controller.js");

  var router = require("express").Router();

  router.post("/", entregas.create);
  router.get("/", entregas.findAll);

  app.use('/api/entregas', router);
};
