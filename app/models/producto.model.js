module.exports = (sequelize, Sequelize) => {
  const Producto = sequelize.define("producto", {
    codigo: {
      type: Sequelize.STRING
    },
    descripcion: {
      type: Sequelize.STRING
    },
  });

  return Producto;
};
