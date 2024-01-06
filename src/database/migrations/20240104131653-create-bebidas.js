'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bebidas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING(500)
      },
      preco: {
        type: Sequelize.DECIMAL(4,2)
      },
      tamanho: {
        type: Sequelize.INTEGER
      },
      calorias: {
        type: Sequelize.INTEGER
      },
      peso: {
        type: Sequelize.INTEGER
      },
      imagem_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bebidas');
  }
};