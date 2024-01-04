'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sanduiches extends Model {
    static associate(models) {
      // define association here
    }
  }
  Sanduiches.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    calorias: DataTypes.INTEGER,
    peso: DataTypes.INTEGER,
    imagem_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sanduiches',
    tableName: 'sanduiches',
  });
  return Sanduiches;
};