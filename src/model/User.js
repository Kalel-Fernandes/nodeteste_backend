const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: {type: DataTypes.STRING(45), allowNull: false},
    email: {type: DataTypes.STRING(45), allowNull: false},
}, {
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Usuario;