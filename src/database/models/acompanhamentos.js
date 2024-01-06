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
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: DataTypes.STRING,
    preco: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    tamanho: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1,1],
          msg: "o campo tamanho deve conter no máximo 1 caracter"
        }
      }
    },
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