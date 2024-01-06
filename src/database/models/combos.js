'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Combos extends Model {
    static associate(models) {
      // define association here
    }
  }
  Combos.init({
    item_1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_3: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    calorias: DataTypes.INTEGER,
    peso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Combos',
    tableName: 'combos',
  });
  return Combos;
};