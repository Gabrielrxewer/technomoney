"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("StockHistories", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      symbol: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      date_utc: {
        type: Sequelize.INTEGER, 
        allowNull: false,
      },
      open: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      high: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      low: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      close: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      volume: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      adjclose: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    });
  },
};
