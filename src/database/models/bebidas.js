'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bebidas extends Model {
    static associate(models) {
      // define association here
    }
  }
  Bebidas.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: DataTypes.STRING,
    preco: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    tamanho: DataTypes.INTEGER,
    calorias: DataTypes.INTEGER,
    peso: DataTypes.INTEGER,
    imagem_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bebidas',
    tableName: 'bebidas',
  });
  return Bebidas;
};