'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("usuarios", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(75),
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
