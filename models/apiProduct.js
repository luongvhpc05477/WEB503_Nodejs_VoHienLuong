
const sequelize = require('./Database');

const { Sequelize , DataTypes } = require('sequelize');

const Hopdong = sequelize.define('hop_dongs', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ten_nguoi_mua : Sequelize.STRING,
  ten_nguoi_ban : Sequelize.STRING,
  ngay_ky : Sequelize.DATE,
  gia_tien : Sequelize.INTEGER,
  trang_thai: Sequelize.INTEGER,
}, {
  timestamps: false
});



module.exports = Hopdong;

