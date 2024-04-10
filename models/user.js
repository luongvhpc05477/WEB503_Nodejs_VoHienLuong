const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./Database');

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoINcrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    } 
}, {
    timestamps: false
})

module.exports = User