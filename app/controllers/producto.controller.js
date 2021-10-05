const db = require("../models");
const Producto = db.productos;

exports.findAll = (req, res) => {
  var condition = null;

  Producto.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al obtener el listado"
      });
    });
};