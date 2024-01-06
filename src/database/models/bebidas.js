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
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
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