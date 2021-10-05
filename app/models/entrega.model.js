module.exports = (sequelize, Sequelize) => {
  const Entrega = sequelize.define("entrega", {
    fecha: {
      type: Sequelize.STRING
    },
    lote_mp: {
      type: Sequelize.INTEGER
    },
    turno: {
      type: Sequelize.INTEGER
    },
    peso_mp: {
      type: Sequelize.DECIMAL(10,2)
    },
    unidad_mp: {
      type: Sequelize.STRING
    },
  });

  return Entrega;
};
