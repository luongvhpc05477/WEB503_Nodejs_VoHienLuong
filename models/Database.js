
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('thithunodejs', 'root', 'mysql', {
    host: 'localhost',
    dialect:'mysql'
  });

module.exports = sequelize;
