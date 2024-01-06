'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Acompanhamentos extends Model {
    static associate(models) {
      // define association here
    }
  }
  Acompanhamentos.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    tamanho: DataTypes.STRING,
    calorias: DataTypes.INTEGER,
    peso: DataTypes.INTEGER,
    imagem_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Acompanhamentos',
    tableName: 'acompanhamentos',
  });
  return Acompanhamentos;
};