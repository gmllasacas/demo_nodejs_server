const db = require("../models");
const Entrega = db.entregas;
const Producto = db.productos;

exports.create = (req, res) => {
  if (!req.body.productoId) {
    res.status(400).send({
      message: "El producto no puede ser nulo"
    });
    return;
  }

  let date_ob = new Date();
  let hours = date_ob.getHours();
  let turno = ( hours >= 7 && hours <= 19 ? 1 : 2 );

  const entrega = {
    fecha: req.body.fecha,
    lote_mp: req.body.lote_mp,
    turno: turno,
    productoId: req.body.productoId,
    peso_mp: req.body.peso_mp,
    unidad_mp: req.body.unidad_mp,
  };

  Entrega.create(entrega)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al crear el registro"
      });
    });
};

exports.findAll = (req, res) => {
  var condition = null;

  Entrega.findAll({
    where: condition ,
    include: [
      { model: Producto },
    ]
  })
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