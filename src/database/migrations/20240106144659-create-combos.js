'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('combos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_1: {
        type: Sequelize.STRING
      },
      item_2: {
        type: Sequelize.STRING
      },
      item_3: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING(500)
      },
      preco: {
        type: Sequelize.DECIMAL(4,2)
      },
      calorias: {
        type: Sequelize.INTEGER
      },
      peso: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('combos');
  }
};