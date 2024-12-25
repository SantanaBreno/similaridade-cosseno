const Sequelize = require('sequelize');
const database = require('./db');

const Produto = database.define('Restaurante', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    localidade: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    preco: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    categoria: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
}, {
    tableName: 'restaurante',
    timestamp: false,
});

module.export